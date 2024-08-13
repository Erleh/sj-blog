package com.spicejack.sj.general.dto;

import java.util.HashMap;
import java.util.Map;

public class GoogleTokenInfoDto {
    String azp;
    String aud;
    String sub;
    String scope;
    String exp;
    String expires_in;
    String email;
    String email_verified;

    public GoogleTokenInfoDto(){}

    public void setExpires_in(String expires_in) {
        this.expires_in = expires_in;
    }

    public void setScope(String scope) {
        this.scope = scope;
    }

    public void setSub(String sub) {
        this.sub = sub;
    }

    public void setExp(String exp) {
        this.exp = exp;
    }

    public void setEmail_verified(String email_verified) {
        this.email_verified = email_verified;
    }

    public void setAzp(String azp) {
        this.azp = azp;
    }

    public void setAud(String aud) {
        this.aud = aud;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getScope() {
        return scope;
    }

    public String getSub() {
        return sub;
    }

    public String getExp() {
        return exp;
    }

    public String getEmail_verified() {
        return email_verified;
    }

    public String getAzp() {
        return azp;
    }

    public String getAud() {
        return aud;
    }

    public String getEmail() {
        return email;
    }

    public String getExpires_in() {
        return expires_in;
    }

    public Map<String, Object> getMappedAttributes() {
        Map<String, Object> attributes = new HashMap<>();

        attributes.put("azp", getAzp());
        attributes.put("aud", getAud());
        attributes.put("sub", getSub());
        attributes.put("scope", getScope());
        attributes.put("exp", getExp());
        attributes.put("expires_in", getExpires_in());
        attributes.put("email", getEmail());
        attributes.put("email_verified", getEmail_verified());

        return attributes;
    }
}
