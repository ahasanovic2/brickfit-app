package ba.ppis.tim2.backend.service;

import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.model.Termin;
import ba.ppis.tim2.backend.repository.KorisnikRepository;
import ba.ppis.tim2.backend.repository.TerminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TerminServiceImpl implements TerminService{
    @Autowired
    private TerminRepository terminRepository;

    @Override
    public Termin spasiTermin(Termin termin) {
        return terminRepository.save(termin);
    }

    @Override
    public List<Termin> getSviTermini() {
        return terminRepository.findAll();
    }
}
