package ba.ppis.tim2.backend.service;

import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.model.Termin;

import java.util.List;

public interface TerminService {
    Termin spasiTermin(Termin termin);

    public List<Termin> getSviTermini();
}
