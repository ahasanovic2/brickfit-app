package ba.ppis.tim2.backend.service;

import ba.ppis.tim2.backend.model.Sprava;
import ba.ppis.tim2.backend.model.Termin;

import java.util.List;

public interface SpravaService {
    Sprava spasiSpravu(Sprava sprava);

    public List<Sprava> getSveSprave();
}
