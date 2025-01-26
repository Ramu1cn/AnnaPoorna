package com.PowerStar.annadhan2.controller;

import com.PowerStar.annadhan2.DTO.DonorDto;
import com.PowerStar.annadhan2.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.support.CustomSQLErrorCodesTranslation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Donor")
public class DonorController {

    @Autowired
    private DonorService donorService;

    public DonorController(DonorService donorService) {
        this.donorService = donorService;
    }


    @GetMapping("/{username}")
    public ResponseEntity<?> getDonorByUsername(@PathVariable String username) {
        try {
            DonorDto donorDto = donorService.getByUserName(username);
            return ResponseEntity.ok(donorDto);
        } catch (RuntimeException e) {
            // Return 404 Not Found with error message
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }


}
