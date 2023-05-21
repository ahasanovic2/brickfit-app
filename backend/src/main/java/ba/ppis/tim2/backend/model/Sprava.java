package ba.ppis.tim2.backend.model;

import jakarta.persistence.*;

@Entity
public class Sprava {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "vrsta")
    private String vrsta;
    @Column(name = "kolicina")
    private String kolicina;

    public Sprava() {
    }

    public Sprava(int id, String vrsta, String kolicina) {
        this.id = id;
        this.vrsta = vrsta;
        this.kolicina = kolicina;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getVrsta() {
        return vrsta;
    }

    public void setVrsta(String vrsta) {
        this.vrsta = vrsta;
    }

    public String getKolicina() {
        return kolicina;
    }

    public void setKolicina(String kolicina) {
        this.kolicina = kolicina;
    }
}
