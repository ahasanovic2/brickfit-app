package ba.ppis.tim2.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Termin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "termin")
    private String termin;
    @Column(name = "trening")
    private String trening;

    @Column(name = "trener")
    private String trener;
    @Column(name = "vrsta_treninga")
    private String vrstaTreninga;

    public Termin() {
    }

    public Termin(int id, String termin, String trening, String trener, String vrstaTreninga) {
        this.id = id;
        this.termin = termin;
        this.trening = trening;
        this.trener = trener;
        this.vrstaTreninga = vrstaTreninga;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTermin() {
        return termin;
    }

    public void setTermin(String termin) {
        this.termin = termin;
    }

    public String getTrening() {
        return trening;
    }

    public void setTrening(String trening) {
        this.trening = trening;
    }

    public String getTrener() {
        return trener;
    }

    public void setTrener(String trener) {
        this.trener = trener;
    }

    public String getVrstaTreninga() {
        return vrstaTreninga;
    }

    public void setVrstaTreninga(String vrstaTreninga) {
        this.vrstaTreninga = vrstaTreninga;
    }
}
