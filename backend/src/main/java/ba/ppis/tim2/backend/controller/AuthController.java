package ba.ppis.tim2.backend.controller;

import ba.ppis.tim2.backend.dto.LoginDto;
import ba.ppis.tim2.backend.dto.SignUpDto;
import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.model.Role;
import ba.ppis.tim2.backend.repository.KorisnikRepository;
import ba.ppis.tim2.backend.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Collections;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private KorisnikRepository korisnikRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/user/signin")
    public ResponseEntity<String> authenticateUser(@RequestBody LoginDto loginDto){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getEmail(), loginDto.getPassword()));

        // After setting the Authentication in the context, we can retrieve the UserDetails
        // and check if the user has admin privileges.
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();
        boolean isAdmin = authorities.stream().anyMatch(auth -> auth.getAuthority().equals("ROLE_ADMIN"));
        if (isAdmin) {
            return new ResponseEntity<>("Admin cannot login via user login form", HttpStatus.FORBIDDEN);
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);
        return new ResponseEntity<>("User signed-in successfully!.", HttpStatus.OK);
    }

    @PostMapping("/user/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignUpDto signUpDto){

        // add check for username exists in a DB
        if(korisnikRepository.existsByEmail(signUpDto.getEmail())){
            return new ResponseEntity<>("Email is already taken!", HttpStatus.BAD_REQUEST);
        }

        Korisnik korisnik = new Korisnik();
        korisnik.setIme(signUpDto.getIme());
        korisnik.setEmail(signUpDto.getEmail());
        korisnik.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
        korisnik.setPrezime(signUpDto.getPrezime());

        Role roles = roleRepository.findByName("ROLE_USER").get();
        korisnik.setRoles(Collections.singleton(roles));
        korisnikRepository.save(korisnik);
        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
    }

    @PostMapping("/admin/signin")
    public ResponseEntity<String> authenticateAdmin(@RequestBody LoginDto loginDto){
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getEmail(), loginDto.getPassword()));

        // After setting the Authentication in the context, we can retrieve the UserDetails
        // and check if the user has user privileges.
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();
        boolean isUser = authorities.stream().anyMatch(auth -> auth.getAuthority().equals("ROLE_USER"));
        if (isUser) {
            return new ResponseEntity<>("User cannot login via admin login form", HttpStatus.FORBIDDEN);
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);
        return new ResponseEntity<>("Admin signed-in successfully!.", HttpStatus.OK);
    }

    @PostMapping("/admin/signup")
    public ResponseEntity<?> registerAdmin(@RequestBody SignUpDto signUpDto){

        // add check for username exists in a DB
        if(korisnikRepository.existsByEmail(signUpDto.getEmail())){
            return new ResponseEntity<>("Email is already taken!", HttpStatus.BAD_REQUEST);
        }

        Korisnik korisnik = new Korisnik();
        korisnik.setIme(signUpDto.getIme());
        korisnik.setEmail(signUpDto.getEmail());
        korisnik.setPassword(passwordEncoder.encode(signUpDto.getPassword()));
        korisnik.setPrezime(signUpDto.getPrezime());

        Role roles = roleRepository.findByName("ROLE_ADMIN").get();
        korisnik.setRoles(Collections.singleton(roles));
        korisnikRepository.save(korisnik);
        return new ResponseEntity<>("Admin registered successfully", HttpStatus.OK);
    }
}
