package ba.ppis.tim2.backend.service;

import ba.ppis.tim2.backend.errorHandler.VecPostojiException;
import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.repository.KorisnikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class KorisnikServiceImpl implements KorisnikService {
    @Autowired
    private KorisnikRepository korisnikRepository;

    @Override
    public ResponseEntity spasiKorisnika(Korisnik korisnik) {
        Optional<Korisnik> k = korisnikRepository.findByEmail(korisnik.getEmail());
        if(k.isEmpty())
            return new ResponseEntity(korisnikRepository.save(korisnik), HttpStatus.OK);
        else
            throw new VecPostojiException("Korisnik sa datim emailom vec postoji!");
    }

    @Override
    public List<Korisnik> getSviKorisnici() {
        return korisnikRepository.findAll();
    }
}
