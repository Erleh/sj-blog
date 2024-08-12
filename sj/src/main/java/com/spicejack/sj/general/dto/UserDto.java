package com.spicejack.sj.general.dto;

import java.sql.Timestamp;

public class UserDto {
    long id;
    String username;
    String email;
    boolean isActive;
    Timestamp creationTime;

    public UserDto() {}

    public void setEmail(String email) {
        this.email = email;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public void setCreationTime(Timestamp creationTime) {
        this.creationTime = creationTime;
    }

    public String getEmail() {
        return email;
    }

    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public Timestamp getCreationTime() {
        return creationTime;
    }
}
