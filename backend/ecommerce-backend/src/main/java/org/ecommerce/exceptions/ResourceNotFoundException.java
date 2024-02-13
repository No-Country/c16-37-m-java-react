package org.ecommerce.exceptions;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Getter @Setter
@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    private String resourceName;
    private String fieldName;
    private Integer fieldValue;

    public ResourceNotFoundException(String resourceName) {
        super(String.format("No se encontraron %s en el sistema", resourceName));
        this.resourceName = resourceName;
    }

    public ResourceNotFoundException(String resourceName,String fieldName, Integer fieldValue) {
        super(String.format("No se encontro el %s con %s : '%s' en el sistema", resourceName,fieldName, fieldValue));
        this.resourceName = resourceName;
        this.fieldName = fieldName;
        this.fieldValue = fieldValue;
    }
}
