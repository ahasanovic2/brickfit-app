package ba.ppis.tim2.backend.controller;

import ba.ppis.tim2.backend.model.Sprava;
import ba.ppis.tim2.backend.model.Termin;
import ba.ppis.tim2.backend.service.SpravaService;
import ba.ppis.tim2.backend.service.SpravaServiceImpl;
import ba.ppis.tim2.backend.service.TerminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class SpravaController {
    @Autowired
    private SpravaService spravaService;

    @PostMapping("/dodajSpravu")
    public String dodajSpravu(@RequestBody Sprava sprava) {
        spravaService.spasiSpravu(sprava);
        return "Nova sprava je uspješno dodana!";
    }

    @GetMapping("/sprave")
    public List<Sprava> getSveSprave() {
        return spravaService.getSveSprave();
    }
}
