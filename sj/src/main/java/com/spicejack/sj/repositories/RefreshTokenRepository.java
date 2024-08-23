package com.spicejack.sj.repositories;

import com.spicejack.sj.general.dto.RefreshToken;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface RefreshTokenRepository extends CrudRepository<RefreshToken, Long> {
    @Modifying
    @Query("INSERT INTO refresh_tokens (id, user_id, token, iss, isValid, created_at, updated_at) VALUES (DEFAULT, :id, :token, :iss, :isValid, DEFAULT, DEFAULT)")
    void addRefreshToken(long id, String token, boolean isValid, String iss);

    @Modifying
    @Query("DELETE FROM refresh_tokens WHERE token = :refreshToken")
    void removeRefreshToken(String refreshToken);
}
