package ba.ppis.tim2.backend.repository;

import ba.ppis.tim2.backend.model.Termin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TerminRepository extends JpaRepository<Termin, Integer> {
}

