package ba.ppis.tim2.backend.service;

import ba.ppis.tim2.backend.model.Sprava;
import ba.ppis.tim2.backend.model.Termin;
import ba.ppis.tim2.backend.repository.SpravaRepository;
import ba.ppis.tim2.backend.repository.TerminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpravaServiceImpl implements SpravaService{
    @Autowired
    private SpravaRepository spravaRepository;

    @Override
    public Sprava spasiSpravu(Sprava sprava) {
        return spravaRepository.save(sprava);
    }

    @Override
    public List<Sprava> getSveSprave() {
        return spravaRepository.findAll();
    }
}