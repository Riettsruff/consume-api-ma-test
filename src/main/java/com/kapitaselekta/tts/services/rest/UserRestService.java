/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kapitaselekta.tts.services.rest;

import com.kapitaselekta.tts.entities.LoginInput;
import com.kapitaselekta.tts.entities.BasicInformation;
import com.kapitaselekta.tts.entities.Address;
import com.kapitaselekta.tts.entities.Contact;
import com.kapitaselekta.tts.entities.CurrentOccupation;
import com.kapitaselekta.tts.entities.Education;
import com.kapitaselekta.tts.entities.Job;
import com.kapitaselekta.tts.entities.Major;
import com.kapitaselekta.tts.entities.University;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
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
    
    public BasicInformation getBasicInformation(String id) {
        ResponseEntity<BasicInformation> response = restTemplate.exchange(
            uri + "/profile/basic/" + id,
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<BasicInformation>() {}
        );
        
        return response.getBody();
    }
    
    public Address getAddress(String id) {
        ResponseEntity<Address> response = restTemplate.exchange(
            uri + "/profile/address/" + id,
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<Address>() {}
        );
        
        return response.getBody();
    }
    
    public Contact getContact(String id) {
        ResponseEntity<Contact> response = restTemplate.exchange(
            uri + "/profile/contact/" + id,
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<Contact>() {}
        );
        
        return response.getBody();
    }
    
    public CurrentOccupation getCurrentOccupation(String id) {
        ResponseEntity<CurrentOccupation> response = restTemplate.exchange(
            uri + "/profile/currentoccupation/" + id,
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<CurrentOccupation>() {}
        );
        
        return response.getBody();
    }
    
    public Education getEducation(String id) {
        ResponseEntity<Education> response = restTemplate.exchange(
            uri + "/profile/education/" + id,
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<Education>() {}
        );
        
        return response.getBody();
    }
    
    public List<Job> getJobs() {
        ResponseEntity<List<Job>> response = restTemplate.exchange(
            uri + "/get/jobs",
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<List<Job>>() {}
        );
        
        return response.getBody();
    }
    
    public List<Major> getMajors() {
        ResponseEntity<List<Major>> response = restTemplate.exchange(
            uri + "/get/majors",
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<List<Major>>() {}
        );
        
        return response.getBody();
    }
    
    public List<University> getUniversities() {
        ResponseEntity<List<University>> response = restTemplate.exchange(
            uri + "/get/universities",
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<List<University>>() {}
        );
        
        return response.getBody();
    }
    
}
