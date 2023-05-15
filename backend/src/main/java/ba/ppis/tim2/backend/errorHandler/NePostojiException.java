package ba.ppis.tim2.backend.errorHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NePostojiException extends RuntimeException {
    public NePostojiException(String exception) {
        super(exception);
    }
}
