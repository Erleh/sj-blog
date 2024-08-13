package com.spicejack.sj.services;

import com.spicejack.sj.general.dto.UserDto;
import com.spicejack.sj.repositories.UserRepository;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(
            UserRepository userRepository
    ) {
        this.userRepository = userRepository;
    }

    public UserDto getUserById(long id) {
        return userRepository.findUserById(id);
    }

    public UserDto getUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    public long getUserIdByEmail(String email) {
        return userRepository.findUserIdByEmail(email);
    }

    public boolean checkIfUserExistsByEmail(String email) {
        return userRepository.checkIfUserExistsByEmail(email);
    }

    public Collection<String> findUserRolesByEmail(String email) { return userRepository.findUserRolesByEmail(email); }

    public void createUser(String username, String email, boolean isActive) {
        userRepository.createUser(username, email, isActive);
    }
}
