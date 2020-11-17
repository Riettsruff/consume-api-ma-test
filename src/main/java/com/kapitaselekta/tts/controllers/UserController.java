/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kapitaselekta.tts.controllers;

import com.kapitaselekta.tts.entities.LoginInput;
import com.kapitaselekta.tts.entities.BasicInformation;
import com.kapitaselekta.tts.entities.Address;
import com.kapitaselekta.tts.entities.Contact;
import com.kapitaselekta.tts.entities.CurrentOccupation;
import com.kapitaselekta.tts.entities.Education;
import com.kapitaselekta.tts.services.rest.UserRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

/**
 *
 * @author Riett
 */
@Controller
public class UserController {
    
    @Autowired
    UserRestService userRestService;
    
    @GetMapping("/")
    public String index(Model model) {
        BasicInformation basicInformation = userRestService.getBasicInformation("USER-00099");
        Address address = userRestService.getAddress("USER-00099");
        Contact contact = userRestService.getContact("USER-00099");
        CurrentOccupation currentOccupation = userRestService.getCurrentOccupation("USER-00099");
        Education education = userRestService.getEducation("USER-00099");
        
        model.addAttribute("basicInformation", basicInformation);
        model.addAttribute("address", address);
        model.addAttribute("contact", contact);
        model.addAttribute("currentOccupation", currentOccupation);
        model.addAttribute("education", education);
        
        return "index";
    }
    
    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("login", new LoginInput());
        
        return "login";
    }
    
    @GetMapping("/register")
    public String register() {
        return "register";
    }
    
    @GetMapping("/forgotpassword")
    public String forgotPassword() {
        return "forgot-password";
    }
    
    @GetMapping("/forgotpassword/{verificationCode}")
    public String resetPassword(Model model, @PathVariable String verificationCode) {
        model.addAttribute("verificationCode", verificationCode);
        
        return "reset-password";
    }
    
}
