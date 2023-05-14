package ba.ppis.tim2.backend.service;

import ba.ppis.tim2.backend.model.Korisnik;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface KorisnikService {
    ResponseEntity spasiKorisnika(Korisnik korisnik);

    public List<Korisnik> getSviKorisnici();
}
