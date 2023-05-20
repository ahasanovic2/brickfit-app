package ba.ppis.tim2.backend.dto;

import lombok.Data;

@Data
public class SignUpDto {
    private String ime;
    private String email;
    private String password;
    private String prezime;
}
