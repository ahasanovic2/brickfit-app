package ba.ppis.tim2.backend.service;

import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.model.Recenzija;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface RecenzijaService {
    ResponseEntity dodajRecenzijuZaKorisnika(Long id, Recenzija recenzija);

    public List<Recenzija> dajSveRecenzije();
}
