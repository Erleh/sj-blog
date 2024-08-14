package com.spicejack.sj.repositories;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import com.spicejack.sj.general.dto.UserDto;

import java.util.Collection;


public interface UserRepository extends CrudRepository<UserDto, Long> {
    @Query("SELECT * FROM users WHERE id = :id")
    UserDto findUserById(long id);

    @Query("SELECT * FROM users WHERE email = :email")
    UserDto findUserByEmail(String email);

    @Query("SELECT id FROM users WHERE email = :email")
    long findUserIdByEmail(String email);

    @Query("SELECT EXISTS (SELECT id FROM users WHERE email = :email)")
    boolean checkIfUserExistsByEmail(String email);

    @Query("SELECT EXISTS (SELECT id FROM users WHERE username = :username)")
    boolean checkIfUserExistsByUsername(String username);

    @Query("SELECT r.name FROM roles r JOIN assigned_roles ar ON r.id = ar.roles_id JOIN users u ON ar.user_id = u.id WHERE u.email = :email")
    Collection<String> findUserRolesByEmail(String email);

    // Possible errors to account for:
    //      if username already exists
    //      if email already exists
    @Query("INSERT INTO users (id, username, email, isActive, creationTime) VALUES (DEFAULT, :username, :email, :isActive, DEFAULT)")
    void createUser(String username, String email, boolean isActive);
}
