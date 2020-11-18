/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kapitaselekta.tts.controllers;

import com.kapitaselekta.tts.entities.LoginInput;
import com.kapitaselekta.tts.entities.LoginOutput;
import com.kapitaselekta.tts.entities.BasicInformation;
import com.kapitaselekta.tts.entities.Address;
import com.kapitaselekta.tts.entities.Contact;
import com.kapitaselekta.tts.entities.CurrentOccupation;
import com.kapitaselekta.tts.entities.Education;
import com.kapitaselekta.tts.entities.Job;
import com.kapitaselekta.tts.entities.Major;
import com.kapitaselekta.tts.entities.University;
import com.kapitaselekta.tts.services.rest.UserRestService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
        List<Job> jobs = userRestService.getJobs();
        List<Major> majors = userRestService.getMajors();
        List<University> universities = userRestService.getUniversities();
        
        BasicInformation basicInformation = userRestService.getBasicInformation("USER-00099");
        Address address = userRestService.getAddress("USER-00099");
        Contact contact = userRestService.getContact("USER-00099");
        CurrentOccupation currentOccupation = userRestService.getCurrentOccupation("USER-00099");
        Education education = userRestService.getEducation("USER-00099");
        
        model.addAttribute("jobs", jobs);
        model.addAttribute("majors", majors);
        model.addAttribute("universities", universities);
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
    
//    @PostMapping("/login")
//    public String login(@RequestParam("email") String email, @RequestParam("password") String password) {
//        LoginInput loginInput = new LoginInput();
//        loginInput.setEmail(email);
//        loginInput.setPassword(password);
//        
//        LoginOutput loginOutput = userRestService.login(loginInput);
//        
//        if(loginOutput == null) {
//            return "redirect:/forgotpassword";
//        }
//        
//        return "redirect:/";
//    }
    
    @GetMapping("/register")
    public String register(Model model) {
        List<Job> jobs = userRestService.getJobs();
        List<Major> majors = userRestService.getMajors();
        List<University> universities = userRestService.getUniversities();
        
        model.addAttribute("jobs", jobs);
        model.addAttribute("majors", majors);
        model.addAttribute("universities", universities);
        
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
