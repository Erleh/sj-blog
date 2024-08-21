package com.spicejack.sj.general.dto;

import java.sql.Timestamp;

public class RefreshToken {
    long id;
    String username;
    String email;
    boolean isActive;
    Timestamp creationTime;

    public RefreshToken() {}

    public void setCreationTime(Timestamp creationTime) {
        this.creationTime = creationTime;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Timestamp getCreationTime() {
        return creationTime;
    }

    public String getUsername() {
        return username;
    }

    public long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }
}
