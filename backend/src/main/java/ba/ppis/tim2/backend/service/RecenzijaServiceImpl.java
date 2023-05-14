package ba.ppis.tim2.backend.service;

import ba.ppis.tim2.backend.controller.RecenzijaController;
import ba.ppis.tim2.backend.errorHandler.NePostojiException;
import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.model.Recenzija;
import ba.ppis.tim2.backend.repository.KorisnikRepository;
import ba.ppis.tim2.backend.repository.RecenzijaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecenzijaServiceImpl implements RecenzijaService{
    @Autowired
    private RecenzijaRepository recenzijaRepository;

    @Autowired
    private KorisnikRepository korisnikRepository;

    @Override
    public List<Recenzija> dajSveRecenzije(){
        return recenzijaRepository.findAll();
    }
    @Override
    public ResponseEntity dodajRecenzijuZaKorisnika(int id, Recenzija recenzija){
        var korisnik = korisnikRepository.findById(id).orElse(null);
        if(korisnik != null) {
            recenzija.setKorisnik(korisnik);
            recenzijaRepository.save(recenzija);
            List<Recenzija> recenzije = new ArrayList<>(korisnik.getRecenzija());
            recenzije.add(recenzija);
            korisnik.setRecenzija(recenzije);
            korisnikRepository.save(korisnik);
            return new ResponseEntity(recenzija, HttpStatus.OK);
        }
        else {
            throw new NePostojiException("Korisnik ne postoji, pa recenzija nije validna!");
        }
    }
}
