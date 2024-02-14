package org.ecommerce.mapper;

import org.ecommerce.config.security.SecurityBeansInjector;
import org.ecommerce.exceptions.ResourceNotFoundException;
import org.ecommerce.models.dto.RegisteredUser;
import org.ecommerce.models.dto.RegisteredUserDto;
import org.ecommerce.models.entity.Role;
import org.ecommerce.models.entity.User;
import org.ecommerce.repositories.RoleRepository;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Collections;

@Mapper(componentModel = "spring", uses = {PasswordEncoder.class, RoleRepository.class,})
public interface UserMapper {


    @Mapping(target = "password", ignore = true)
    @Mapping(target = "roles", ignore = true)
    User toUser(RegisteredUser registeredUser);

    RegisteredUser toRegisteredUser(RegisteredUserDto registeredUserDto);
    RegisteredUserDto toRegisteredUserDto(RegisteredUser registeredUser);

    @Mapping(target = "jwtToken",ignore = true)
    RegisteredUserDto userToRegisteredUserDto(User user);

    @AfterMapping
    default void handlePasswordAndRole(@MappingTarget User user, RegisteredUser registeredUser, PasswordEncoder passwordEncoder, RoleRepository roleRepository, SecurityBeansInjector defaultRole){
        user.setPassword(passwordEncoder.encode(registeredUser.getPassword()));

        Role role = roleRepository.findByName(defaultRole.getDefaultRole())
                .orElseThrow(() -> new ResourceNotFoundException("role", "name",defaultRole.getDefaultRole()));
        user.setRoles(Collections.singleton(role));
    }
}
