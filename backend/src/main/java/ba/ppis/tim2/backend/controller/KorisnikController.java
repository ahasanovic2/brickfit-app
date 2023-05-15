package ba.ppis.tim2.backend.controller;

import ba.ppis.tim2.backend.DTO.KorisnikDTO;
import ba.ppis.tim2.backend.DTO.LoginDTO;
import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.repository.KorisnikRepository;
import ba.ppis.tim2.backend.response.LoginResponse;
import ba.ppis.tim2.backend.service.KorisnikService;
import org.apache.commons.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class KorisnikController {
    @Autowired
    private KorisnikService korisnikService;

    @Autowired
    private KorisnikRepository korisnikRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/dodajKorisnika")
    public ResponseEntity dodajKorisnika(@RequestBody KorisnikDTO korisnikDTO) {
        String id = korisnikService.spasiKorisnikaDTO(korisnikDTO);
        return ResponseEntity.ok(id);
    }

    @GetMapping("/korisnici")
    public List<Korisnik> getSviKorisnici() {
        return korisnikService.getSviKorisnici();
    }

    @PostMapping("/login")
    public LoginResponse loginKorisnik(@RequestBody LoginDTO loginDTO){
        String msg = "";
        Korisnik korisnik1 = korisnikRepository.findByEmail(loginDTO.getEmail());
        if(korisnik1 != null){
            String password = loginDTO.getPassword();
            String encodedPassword = korisnik1.getPassword();
            Boolean isPswRight = passwordEncoder.matches(password, encodedPassword);
            if(isPswRight){
                Optional<Korisnik> korisnik = korisnikRepository.findOneByEmailAndPassword(loginDTO.getEmail(),loginDTO.getPassword());
                if(korisnik.isPresent()){
                    return new LoginResponse("Login success", true);

                }
                else {
                    return  new LoginResponse("Login failed", false);
                }

            }
            else{
                return new LoginResponse("Password doesn't match", false);
            }

        }
        else {
            return  new LoginResponse("Email doesn't match", false);
        }

    }
}
