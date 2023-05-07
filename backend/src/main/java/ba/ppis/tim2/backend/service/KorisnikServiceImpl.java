package ba.ppis.tim2.backend.service;

import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.repository.KorisnikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KorisnikServiceImpl implements KorisnikService {
    @Autowired
    private KorisnikRepository korisnikRepository;

    @Override
    public Korisnik spasiKorisnika(Korisnik korisnik) {
        return korisnikRepository.save(korisnik);
    }

    @Override
    public List<Korisnik> getSviKorisnici() {
        return korisnikRepository.findAll();
    }
}
