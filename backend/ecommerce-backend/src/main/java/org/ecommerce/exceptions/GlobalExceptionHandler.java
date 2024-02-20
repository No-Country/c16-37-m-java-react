package org.ecommerce.exceptions;

import org.ecommerce.models.dto.ApiResponse;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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

@ExceptionHandler(MethodArgumentNotValidException.class)
public ResponseEntity<ApiResponse> handlerMethodArgumentNotValidException(MethodArgumentNotValidException ex,WebRequest webRequest){
    Map<String,String> errors = new HashMap<>();
            ex.getBindingResult().getFieldErrors().forEach(error -> {
                errors.put((error).getField(),error.getDefaultMessage());
            });
    ApiResponse response = new ApiResponse("Los datos proporcionados no son válidos.", errors, HttpStatus.BAD_REQUEST, webRequest.getDescription(false));
    return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
}

}
