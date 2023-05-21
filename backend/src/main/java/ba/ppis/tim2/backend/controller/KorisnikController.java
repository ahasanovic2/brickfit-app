package ba.ppis.tim2.backend.controller;

import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.service.KorisnikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class KorisnikController {
    @Autowired
    private KorisnikService korisnikService;

    @PostMapping("/dodajKorisnika")
    public ResponseEntity dodajKorisnika(@RequestBody Korisnik korisnik) {
        return korisnikService.spasiKorisnika(korisnik);
    }

    @GetMapping("/korisnici")
    public List<Korisnik> getSviKorisnici() {
        return korisnikService.getSviKorisnici();
    }
}
