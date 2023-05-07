package ba.ppis.tim2.backend.controller;

import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.service.KorisnikService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class KorisnikController {
    @Autowired
    private KorisnikService korisnikService;

    @PostMapping("/dodajKorisnika")
    public String dodajKorisnika(@RequestBody Korisnik korisnik) {
        korisnikService.spasiKorisnika(korisnik);
        return "Novi korisnik je uspješno dodan!";
    }

    @GetMapping("/korisnici")
    public List<Korisnik> getSviKorisnici() {
        return korisnikService.getSviKorisnici();
    }
}
