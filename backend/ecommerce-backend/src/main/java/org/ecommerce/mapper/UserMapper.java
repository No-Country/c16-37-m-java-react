package org.ecommerce.mapper;

import org.ecommerce.models.dto.RegisteredUser;
import org.ecommerce.models.dto.RegisteredUserDto;
import org.ecommerce.models.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(target = "username", source = "username")
    @Mapping(target = "firstName", source = "firstName")
    @Mapping(target = "lastName", source = "lastName")
    @Mapping(target = "email", source = "email")
    @Mapping(target = "number", source = "number")
    User toUser(RegisteredUser registeredUser);

    RegisteredUser toRegisteredUser(RegisteredUserDto registeredUserDto);
    RegisteredUserDto toRegisteredUserDto(RegisteredUser registeredUser);

    @Mapping(target = "id",source = "id")
    @Mapping(target = "username",source = "username")
    @Mapping(target = "firstName",source = "firstName")
    @Mapping(target = "lastName",source = "lastName")
    @Mapping(target = "email",source = "email")
    @Mapping(target = "roles",source = "roles")
    RegisteredUserDto userToRegisteredUserDto(User user);


}
