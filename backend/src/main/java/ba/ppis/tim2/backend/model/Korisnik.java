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

    @Column(name = "username")
    @NotBlank(message = "Username ne smije biti prazan!")
    @Size(min = 3, max = 255, message = "Username mora imati barem 3 karaktera")
    private String username;

    @Column(name = "password")
    @NotBlank(message = "Password ne smije biti prazan!")
    @Size(min = 3, max = 255, message = "Password mora imati barem 3 karaktera")
    private String password;

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

    @Column
    @OneToMany(mappedBy = "korisnik")
    @JsonIgnore
    private List<Recenzija> recenzija;

    public Korisnik() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public List<Recenzija> getRecenzija() {
        return recenzija;
    }

    public void setRecenzija(List<Recenzija> recenzija) {
        this.recenzija = recenzija;
    }
}
