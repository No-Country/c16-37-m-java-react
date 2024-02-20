package org.ecommerce.exceptions;

import org.ecommerce.models.dto.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponse> handleResourceNotFoundException(ResourceNotFoundException ex, WebRequest webRequest){
        ApiResponse response = new ApiResponse(ex.getMessage(),"El recurso solicitado no se encontro." ,HttpStatus.NOT_FOUND, webRequest.getDescription(false));
        return new ResponseEntity<>(response,HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse> handleGlobalException(Exception ex, WebRequest webRequest){
        ApiResponse response = new ApiResponse(ex.getMessage(),"Ocurrio un error" ,HttpStatus.INTERNAL_SERVER_ERROR, webRequest.getDescription(false));
        return new ResponseEntity<>(response,HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ApiResponse> handlerAccessDeniedException(AccessDeniedException ex, WebRequest webRequest){
        ApiResponse response = new ApiResponse(ex.getMessage(),"Acceso denegado. No tienes los permisos necesarios para acceder a esta función."
                ,HttpStatus.FORBIDDEN, webRequest.getDescription(false));
        return new ResponseEntity<>(response,HttpStatus.FORBIDDEN);
    }

}
