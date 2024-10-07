package com.spicejack.sj.services;

import com.spicejack.sj.general.dto.UserDto;
import com.spicejack.sj.repositories.RefreshTokenRepository;
import com.spicejack.sj.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final GoogleAuthService googleAuthService;

    public UserService(
            UserRepository userRepository,
            RefreshTokenRepository refreshTokenRepository,
            GoogleAuthService googleAuthService
    ) {
        this.userRepository = userRepository;
        this.refreshTokenRepository = refreshTokenRepository;
        this.googleAuthService = googleAuthService;
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

    public boolean checkIfUserExistsByUsername(String username) { return userRepository.checkIfUserExistsByUsername(username); }

    public boolean checkForRefreshToken(String refreshToken) {
        // Check if refresh token exists
        int tokenCount = refreshTokenRepository.findRefreshToken(refreshToken);

        if (tokenCount == 0) {
            return false;
        }

        // return if the refresh token was valid
        return refreshTokenRepository.isRefreshTokenValid(refreshToken);
    }

    public Collection<String> findUserRolesByEmail(String email) { return userRepository.findUserRolesByEmail(email); }

    public void createUser(String username, String email, boolean isActive) {
        userRepository.createUser(username, email, isActive);
    }

    public void saveRefreshToken(long userId, String token, boolean isValid, String iss) {
        refreshTokenRepository.addRefreshToken(userId, token, isValid, iss);
    }

    // Revoke user access token based off token issuer
    public void revokeRefreshToken(
            String token,
            String iss
    ) {
        if (iss.compareTo("google.com") == 0) {
            this.googleAuthService.revokeToken(token);
        }

        refreshTokenRepository.removeRefreshToken(token);
    }
}
