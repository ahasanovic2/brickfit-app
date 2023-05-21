package ba.ppis.tim2.backend.service;

import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.repository.KorisnikRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private KorisnikRepository korisnikRepository;
    public CustomUserDetailsService(KorisnikRepository korisnikRepository) {
        this.korisnikRepository = korisnikRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Korisnik korisnik = null;
        try {
            korisnik = korisnikRepository.findByEmail(email).orElseThrow(() ->
                    new UsernameNotFoundException("User not found with username or email: " + email));
        } catch (Exception e) {
            // log the error or handle it
        }

        if (korisnik != null) {
            Set<GrantedAuthority> authorities = korisnik
                    .getRoles()
                    .stream()
                    .map((role) -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toSet());

            return new org.springframework.security.core.userdetails.User(korisnik.getEmail(),
                    korisnik.getPassword(),
                    authorities);
        } else {
            throw new UsernameNotFoundException("User not found with username or email: " + email);
        }
    }
}
