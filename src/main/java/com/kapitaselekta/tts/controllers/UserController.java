/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kapitaselekta.tts.controllers;

import com.kapitaselekta.tts.entities.LoginInput;
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
    public String index() {
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
