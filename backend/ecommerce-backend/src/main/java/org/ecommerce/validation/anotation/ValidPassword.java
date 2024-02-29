package org.ecommerce.validation.anotation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import org.ecommerce.validation.validator.ValidPasswordValidator;
import java.lang.annotation.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD,ElementType.METHOD})
@Constraint(validatedBy = {ValidPasswordValidator.class})
public @interface ValidPassword {
    String message() default "{user.password.invalid}";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
