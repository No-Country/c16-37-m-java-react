package org.ecommerce.models.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.http.HttpStatus;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class ApiResponse implements Serializable {
    private String message;
    private HttpStatus status;
    @JsonFormat(pattern = "yyyy/MM/dd HH:mm:ss")
    private LocalDateTime timestamp;
    private String url;
    private Object error;

    public ApiResponse(String message, Object error, HttpStatus status, String url){
        this.message = message;
        this.error = error;
        this.status = status;
        this.url = url.replace("uri=","");
        this.timestamp = LocalDateTime.now();
    }

}
