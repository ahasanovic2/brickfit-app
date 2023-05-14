package ba.ppis.tim2.backend.errorHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class VecPostojiException extends RuntimeException {
    public VecPostojiException(String exception) {
        super(exception);
    }
}
