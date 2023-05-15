package ba.ppis.tim2.backend;

import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.repository.KorisnikRepository;
import ba.ppis.tim2.backend.repository.RecenzijaRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Service
public class UserService{

    @Autowired
    private KorisnikRepository korisnikRepository;

    @Autowired
    private RecenzijaRepository recenzijaRepository;


    @Transactional
    public void createRows() {
        Korisnik korisnik = new Korisnik();
        korisnik.setIme("Vedad");
        korisnik.setPrezime("Dervisevic");
        korisnik.setEmail("vdervisevi1@etf.unsa.ba");
        korisnik.setPassword("JUMP2018");
        korisnik.setAdresa("Avde Hume 1");
        korisnik.setBrojTelefona("063236950");
        korisnik.setDatumRodjenja(LocalDate.of(1990, 8, 23));
        korisnik.setSpol("Muški");

        korisnikRepository.save(korisnik);


    }
}