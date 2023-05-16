package ba.ppis.tim2.backend.controller;

import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.model.Termin;
import ba.ppis.tim2.backend.service.KorisnikService;
import ba.ppis.tim2.backend.service.TerminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class TerminController {
    @Autowired
    private TerminService terminService;

    @PostMapping("/dodajTermin")
    public String dodajTermin(@RequestBody Termin termin) {
        terminService.spasiTermin(termin);
        return "Novi termin je uspješno dodan!";
    }

    @GetMapping("/termini")
    public List<Termin> getSviTermini() {
        return terminService.getSviTermini();
    }
}
