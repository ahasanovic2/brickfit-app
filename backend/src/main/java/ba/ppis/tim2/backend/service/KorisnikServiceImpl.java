package ba.ppis.tim2.backend.service;
import ba.ppis.tim2.backend.DTO.LoginDTO;
import ba.ppis.tim2.backend.response.LoginResponse;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import ba.ppis.tim2.backend.DTO.KorisnikDTO;
import ba.ppis.tim2.backend.errorHandler.VecPostojiException;
import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.repository.KorisnikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KorisnikServiceImpl implements KorisnikService {
    @Autowired
    private KorisnikRepository korisnikRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public ResponseEntity spasiKorisnika(Korisnik korisnik) {
        Korisnik k = korisnikRepository.findByEmail(korisnik.getEmail());
        if(k == null)
            return new ResponseEntity(korisnikRepository.save(korisnik), HttpStatus.OK);
        else
            throw new VecPostojiException("Korisnik sa datim emailom vec postoji!");
    }

    @Override
    public List<Korisnik> getSviKorisnici() {
        return korisnikRepository.findAll();
    }

    @Override
    public String spasiKorisnikaDTO(KorisnikDTO korisnikDTO) {
        Korisnik korisnik = new Korisnik(
                korisnikDTO.getId(),
                korisnikDTO.getIme(),
                korisnikDTO.getPrezime(),
                korisnikDTO.getEmail(),
                korisnikDTO.getAdresa(),
                korisnikDTO.getBrojTelefona(),
                korisnikDTO.getDatumRodjenja(),
                korisnikDTO.getSpol(),
                korisnikDTO.getRecenzija(),
                this.passwordEncoder.encode(korisnikDTO.getPassword())
        );


        korisnikRepository.save(korisnik);
        return korisnik.getIme();
    }

    @Override
    public LoginResponse loginKorisnik(LoginDTO loginDTO) {
        return null;
    }
}
