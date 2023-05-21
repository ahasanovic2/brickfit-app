package ba.ppis.tim2.backend.dto;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class SignUpDto {
    private String ime;
    private String email;
    private String password;
    private String prezime;
    private LocalDate datumRodjenja;
    private String brojTelefona;
    private String spol;
}
