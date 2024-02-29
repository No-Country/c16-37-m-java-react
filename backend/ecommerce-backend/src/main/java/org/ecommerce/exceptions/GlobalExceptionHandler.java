package org.ecommerce.exceptions;

import org.ecommerce.models.dto.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.util.HashMap;
import java.util.Map;

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

    @ExceptionHandler(AuthenticationCredentialsNotFoundException.class)
    public ResponseEntity<ApiResponse> handlerAccessDeniedException(AuthenticationCredentialsNotFoundException ex, WebRequest webRequest){
        ApiResponse response = new ApiResponse(ex.getMessage(),"No se encontraron credenciales de autenticacion. Porfavor inicie sesion para acceder a esta funcion."
                ,HttpStatus.UNAUTHORIZED, webRequest.getDescription(false));
        return new ResponseEntity<>(response,HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ApiResponse> handlerAccessDeniedException(BadCredentialsException ex, WebRequest webRequest){
        ApiResponse response = new ApiResponse("Credenciales de autenticacion incorrectas. Porfavor verifique su registro e intente nuevamente.",ex.getMessage()
                ,HttpStatus.BAD_REQUEST, webRequest.getDescription(false));
        return new ResponseEntity<>(response,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse> handlerMethodArgumentNotValidException(MethodArgumentNotValidException ex,WebRequest webRequest){
        Map<String,String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error -> errors.put((error).getField(),error.getDefaultMessage()));
        ApiResponse response = new ApiResponse("Los datos proporcionados no son válidos.", errors, HttpStatus.BAD_REQUEST, webRequest.getDescription(false));
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

}
