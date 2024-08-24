package com.spicejack.sj.configurations.customizers;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class CustomLogoutSuccessHandler implements LogoutSuccessHandler {

    // Custom logout success handler for this case where our
    // backend acts as a REST api and does not need to redirect
    @Override
    public void onLogoutSuccess(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication
    ) throws IOException, ServletException {
        // Success response on logout
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().flush(); // Ensures the response is sent immediately
    }
}
