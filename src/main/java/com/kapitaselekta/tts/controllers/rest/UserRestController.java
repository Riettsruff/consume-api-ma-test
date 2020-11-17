package com.kapitaselekta.tts.controllers.rest;

import com.kapitaselekta.tts.services.rest.UserRestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Riett
 */
@RestController
public class UserRestController {
    
    @Autowired
    UserRestService userRestService;
}
