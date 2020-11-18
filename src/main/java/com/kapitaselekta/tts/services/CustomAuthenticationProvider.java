/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kapitaselekta.tts.services;

import com.kapitaselekta.tts.entities.LoginInput;
import com.kapitaselekta.tts.entities.LoginOutput;
import com.kapitaselekta.tts.services.rest.UserRestService;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

/**
 *
 * @author Riett
 */
@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {
    
    @Autowired
    UserRestService userRestService;
    
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        System.out.println("gass");
        
        String email = authentication.getName();
        String password = authentication.getCredentials().toString();
        
        LoginInput loginInput = new LoginInput();
        loginInput.setEmail(email);
        loginInput.setPassword(password);
        
        LoginOutput loginOutput = userRestService.login(loginInput);
        
        return new UsernamePasswordAuthenticationToken(loginOutput, email, new ArrayList<>());
    }
    
    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
