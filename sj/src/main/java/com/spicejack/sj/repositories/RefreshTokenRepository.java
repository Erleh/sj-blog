package com.spicejack.sj.repositories;

import com.spicejack.sj.general.dto.RefreshToken;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface RefreshTokenRepository extends CrudRepository<RefreshToken, Long> {
    @Modifying
    @Query("INSERT INTO refresh_tokens (id, user_id, token, isValid, created_at, updated_at) VALUES (DEFAULT, :id, :token, :isValid, DEFAULT, DEFAULT)")
    void addRefreshToken(long id, String token, boolean isValid);
}
