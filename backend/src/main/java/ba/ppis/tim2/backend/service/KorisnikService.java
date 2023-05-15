package ba.ppis.tim2.backend.service;

import ba.ppis.tim2.backend.DTO.KorisnikDTO;
import ba.ppis.tim2.backend.DTO.LoginDTO;
import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.response.LoginResponse;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface KorisnikService {
    ResponseEntity spasiKorisnika(Korisnik korisnik);

    public List<Korisnik> getSviKorisnici();

    String spasiKorisnikaDTO(KorisnikDTO korisnikDTO);

    LoginResponse loginKorisnik(LoginDTO loginDTO);
}
