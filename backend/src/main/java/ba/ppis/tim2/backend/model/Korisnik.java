package ba.ppis.tim2.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;
import java.util.List;

@Entity
public class Korisnik {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "ime")
    @NotBlank(message = "Ime ne smije biti prazno!")
    @Size(min = 3, max = 255, message = "Ime mora imati barem 3 karaktera")
    private String ime;
    @Column(name = "prezime")
    @NotBlank(message = "Prezime ne smije biti prazno!")
    @Size(min = 2, max = 255, message = "Prezime mora imati barem 2 karaktera")
    private String prezime;

    @Column(name = "email")
    @Email(message = "Email is not valid", regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$")
    @NotBlank(message = "Mail ne smije biti prazan")
    private String email;
    @Column(name = "adresa")
    private String adresa;
    @Column(name = "broj_telefona")
    private String brojTelefona;
    @Column(name = "datum_rodjenja")
    @JsonFormat(pattern = "dd.MM.yyyy")
    private LocalDate datumRodjenja;
    @Column(name = "spol")
    private String spol;

    @Column(name = "recenzije")
    @OneToMany(mappedBy = "korisnik")
    @JsonIgnore
    private List<Recenzija> recenzije;


    public Korisnik() {
    }

    public Korisnik(String ime, String prezime, String email, String adresa, String brojTelefona, LocalDate datumRodjenja, String spol) {
        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
        this.adresa = adresa;
        this.brojTelefona = brojTelefona;
        this.datumRodjenja = datumRodjenja;
        this.spol = spol;
    }

    public List<Recenzija> getRecenzije() {
        return recenzije;
    }

    public void setRecenzije(List<Recenzija> recenzije) {
        this.recenzije = recenzije;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getPrezime() {
        return prezime;
    }

    public void setPrezime(String prezime) {
        this.prezime = prezime;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAdresa() {
        return adresa;
    }

    public void setAdresa(String adresa) {
        this.adresa = adresa;
    }

    public String getBrojTelefona() {
        return brojTelefona;
    }

    public void setBrojTelefona(String brojTelefona) {
        this.brojTelefona = brojTelefona;
    }

    public LocalDate getDatumRodjenja() {
        return datumRodjenja;
    }

    public void setDatumRodjenja(LocalDate datumRodjenja) {
        this.datumRodjenja = datumRodjenja;
    }

    public String getSpol() {
        return spol;
    }

    public void setSpol(String spol) {
        this.spol = spol;
    }
}
