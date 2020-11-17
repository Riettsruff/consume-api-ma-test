/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kapitaselekta.tts.services.rest;

import com.kapitaselekta.tts.entities.LoginInput;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author Riett
 */
@Service
public class UserRestService {
    
    @Autowired
    RestTemplate restTemplate;
    
    @Value("${api.uri}")
    private String uri;
    
    public String login(LoginInput loginInput) {
        Map<String, String> args = new HashMap<String, String>();
        
        args.put("email", loginInput.getEmail());
        args.put("password", loginInput.getPassword());
        
        String result = restTemplate.postForObject(uri + "/login", args, String.class);
        
        return result;
    }
}
