package com.spicejack.sj.proxies;

import com.spicejack.sj.general.dto.GoogleTokenExchangeDto;
import com.spicejack.sj.general.dto.GoogleTokenInfoDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;


@FeignClient(value = "googleApiClient", url = "https://oauth2.googleapis.com")
public interface GoogleAuthApisProxy{
    @RequestMapping(method = RequestMethod.POST, value = "/token")
    GoogleTokenExchangeDto getTokens(
            @RequestParam String client_id,
            @RequestParam String client_secret,
            @RequestParam String code,
            @RequestParam String grant_type,
            @RequestParam String redirect_uri
    );

    @RequestMapping(method = RequestMethod.POST, value = "/tokeninfo")
    GoogleTokenInfoDto getTokenInfo(
            @RequestParam String access_token
    );

    @RequestMapping(method = RequestMethod.POST, value = "/revoke")
    void revokeToken(
            @RequestParam String token
    );

    @RequestMapping(method = RequestMethod.POST, value = "/token")
    GoogleTokenExchangeDto refreshAccessToken(
        @RequestParam String client_id,
        @RequestParam String client_secret,
        @RequestParam String refresh_token,
        @RequestParam String grant_type
    );
}
