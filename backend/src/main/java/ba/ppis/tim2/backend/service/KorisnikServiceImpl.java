package ba.ppis.tim2.backend.service;

import ba.ppis.tim2.backend.errorHandling.VecPostojiException;
import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.repository.KorisnikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KorisnikServiceImpl implements KorisnikService {
    @Autowired
    private KorisnikRepository korisnikRepository;

    @Override
    public ResponseEntity spasiKorisnika(Korisnik korisnik) {
        var daLiEmailPostoji = korisnikRepository.findByEmail(korisnik.getEmail());
        System.out.println(daLiEmailPostoji);
        if(daLiEmailPostoji == null) {
            return new ResponseEntity(korisnikRepository.save(korisnik), HttpStatus.OK);
        }
        else{
            throw new VecPostojiException("Korisnik sa datim emailom vec postoji!");
        }
    }

    @Override
    public List<Korisnik> getSviKorisnici() {
        return korisnikRepository.findAll();
    }
}
