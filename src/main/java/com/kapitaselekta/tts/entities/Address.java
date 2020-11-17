/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kapitaselekta.tts.entities;

import lombok.Data;

/**
 *
 * @author Riett
 */
@Data
public class Address {
    private String id, province, city, street1, street2, zipCode;
}
