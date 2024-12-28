package com.spicejack.sj.general.dto;

public class GoogleTokenExchangeDto {
    String access_token;
    int expires_in;
    String refresh_token;
    String scope;
    String token_type;

    public GoogleTokenExchangeDto() {}

    public void setScope(String scope) {
        this.scope = scope;
    }

    public void setAccess_token(String access_token) {
        this.access_token = access_token;
    }

    public void setExpires_in(int expires_in) {
        this.expires_in = expires_in;
    }

    public void setRefresh_token(String refresh_token) {
        this.refresh_token = refresh_token;
    }

    public void setToken_type(String token_type) {
        this.token_type = token_type;
    }

    public String getToken_type() {
        return token_type;
    }

    public String getRefresh_token() {
        return refresh_token;
    }

    public String getAccess_token() {
        return access_token;
    }

    public int getExpires_in() {
        return expires_in;
    }

    public String getScope() {
        return scope;
    }

    @Override
    public String toString() {
        return "GoogleTokenExchangeDto{" +
                "access_token='" + access_token + '\'' +
                ", expires_in=" + expires_in +
                ", refresh_token='" + refresh_token + '\'' +
                ", scope=" + scope +
                ", token_type='" + token_type + '\'' +
                '}';
    }
}
