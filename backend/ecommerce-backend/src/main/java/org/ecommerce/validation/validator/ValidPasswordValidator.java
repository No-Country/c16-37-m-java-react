package org.ecommerce.validation.validator;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.ecommerce.validation.anotation.ValidPassword;

public class ValidPasswordValidator implements ConstraintValidator<ValidPassword,String> {

    private static final String PASSWORD_PATTERN = "^(?!.*([A-Za-z0-9])\\1)([^$&#@+)(/?!;:\"']+)$";

    @Override
    public boolean isValid(String password, ConstraintValidatorContext constraintValidatorContext) {
        return !password.isBlank() && password.matches(PASSWORD_PATTERN);
    }

}
