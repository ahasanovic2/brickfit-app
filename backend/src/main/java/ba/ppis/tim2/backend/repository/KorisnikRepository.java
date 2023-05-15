package ba.ppis.tim2.backend.repository;

import ba.ppis.tim2.backend.model.Korisnik;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KorisnikRepository extends JpaRepository<Korisnik, Integer> {
    Korisnik findByEmail(String email);
}
