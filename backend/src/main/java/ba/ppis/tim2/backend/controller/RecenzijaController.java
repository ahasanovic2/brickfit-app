package ba.ppis.tim2.backend.controller;

import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.model.Recenzija;
import ba.ppis.tim2.backend.service.KorisnikService;
import ba.ppis.tim2.backend.service.RecenzijaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class RecenzijaController {

    @Autowired
    private RecenzijaService recenzijaService;

    @PostMapping("/recenzija/{id}")
    public ResponseEntity dodajRecenzijuZaKorisnika(@PathVariable int id, @RequestBody Recenzija recenzija) {
        return recenzijaService.dodajRecenzijuZaKorisnika(id, recenzija);
    }

    @GetMapping("/recenzije")
    public List<Recenzija> dajSveRecenzije() {
        return recenzijaService.dajSveRecenzije();
    }
}
