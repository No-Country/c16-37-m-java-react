package org.ecommerce.services.auth;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Map;

@Service
public class JwtService {

    @Value("${jwt.expiration-in-minutes}")
    private Long EXPIRATION_IN_MINUTES;
    @Value("${jwt.secret-key}")
    private String SECRET_KEY;

    public String generateToken(UserDetails userDetails, Map<String,Object> extraClaims){
        Date issuetAt = new Date(System.currentTimeMillis()); // fecha de creacion del token
        Date expiration = new Date((EXPIRATION_IN_MINUTES * 60 * 1000) + issuetAt.getTime()); // fecha de expiracion del token
        return Jwts.builder()
                .header().type("JWT") // tipo de token
                .and() // y
                .subject(userDetails.getUsername()) // usuario
                .issuedAt(issuetAt) // fecha de creacion
                .expiration(expiration) // fecha de expiracion
                .claims(extraClaims) // datos adicionales
                .signWith(generateKey(), Jwts.SIG.HS256) // firma del token
                .compact();

    }
    // Este metodo se encarga de generar la clave secreta
    // La clave secreta se utiliza para firmar el token
    public SecretKey generateKey() {
        byte[] secretKeyBytes = Decoders.BASE64.decode(SECRET_KEY); // decodificar la clave secreta
        return Keys.hmacShaKeyFor(secretKeyBytes); // generar la clave secreta
    }

    // Este metodo se encarga de extraer el nombre de usuario del token
    // obtiene los claims del token y extrae el nombre de usuario
    public String extractUsername(String jwt) {
        return extractAllClaims(jwt).getSubject(); // extraer el nombre de usuario del token
    }

    // Este metodo se encarga de extraer todos los datos del token
    // El metodo parseSignedClaims se encarga de extraer los datos del token
    // El metodo getPayload se encarga de extraer los datos del token en forma de Claims
    // un claim es un dato que se encuentra en el token
    // por ejemplo el nombre del usuario, la fecha de creacion, la fecha de expiracion, etc
    // veryfyWith se encarga de verificar la firma del token
    // build se encarga de construir el token
    // En resumen este metodo se encarga de extraer todos los datos del token para poder utilizarlos
    // Este proceso sirve para verificar la autenticidad del token
    private Claims extractAllClaims(String jwt) {
        return Jwts.parser().verifyWith(generateKey()).build()
                .parseSignedClaims(jwt).getPayload();
    }


}
