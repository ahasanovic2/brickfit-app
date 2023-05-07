package ba.ppis.tim2.backend.service;

import ba.ppis.tim2.backend.model.Korisnik;

import java.util.List;

public interface KorisnikService {
    Korisnik spasiKorisnika(Korisnik korisnik);

    public List<Korisnik> getSviKorisnici();
}
