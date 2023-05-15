package ba.ppis.tim2.backend.repository;

import ba.ppis.tim2.backend.model.Korisnik;
import ba.ppis.tim2.backend.model.Recenzija;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecenzijaRepository extends JpaRepository<Recenzija, Integer> {
    //Recenzija
}
