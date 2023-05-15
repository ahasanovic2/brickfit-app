package ba.ppis.tim2.backend.DTO;

import ba.ppis.tim2.backend.model.Recenzija;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;
import java.util.List;

public class KorisnikDTO {

    private int id;

    private String ime;

    private String prezime;


    private String email;
    private String password;

    public KorisnikDTO(int id, String ime, String prezime, String email, String password, String adresa, String brojTelefona, LocalDate datumRodjenja, String spol, List<Recenzija> recenzija) {
        this.id = id;
        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
        this.password = password;
        this.adresa = adresa;
        this.brojTelefona = brojTelefona;
        this.datumRodjenja = datumRodjenja;
        this.spol = spol;
        this.recenzija = recenzija;
    }

    private String adresa;

    private String brojTelefona;

    private LocalDate datumRodjenja;
    private String spol;
    private List<Recenzija> recenzija;




    public KorisnikDTO() {
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

    @Override
    public String toString() {
        return "KorisnikDTO{" +
                "id=" + id +
                ", ime='" + ime + '\'' +
                ", prezime='" + prezime + '\'' +
                ", email='" + email + '\'' +
                ", adresa='" + adresa + '\'' +
                ", brojTelefona='" + brojTelefona + '\'' +
                ", datumRodjenja=" + datumRodjenja +
                ", spol='" + spol + '\'' +
                ", recenzija=" + recenzija +
                '}';
    }
}
