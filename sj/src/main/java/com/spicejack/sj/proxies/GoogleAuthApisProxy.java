package com.spicejack.sj.proxies;

import com.spicejack.sj.general.dto.GoogleTokenExchangeDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(value = "googleApiClient", url = "https://oauth2.googleapis.com/")
public interface GoogleAuthApisProxy{
    @RequestMapping(method = RequestMethod.POST, value = "/token")
    GoogleTokenExchangeDto getTokens(
            @RequestParam String code,
            @RequestParam String client_id,
            @RequestParam String client_secret,
            @RequestParam String redirect_uri,
            @RequestParam String scope,
            @RequestParam Boolean include_granted_scopes,
            @RequestParam String grant_type
    );
}
