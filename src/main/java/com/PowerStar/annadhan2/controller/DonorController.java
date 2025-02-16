package com.PowerStar.annadhan2.controller;

import com.PowerStar.annadhan2.DTO.DonorDto;
import com.PowerStar.annadhan2.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.support.CustomSQLErrorCodesTranslation;
import org.springframework.web.bind.annotation.*;

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

    // New API to delete by username and password
    @DeleteMapping("/delete/{username}/{password}")
    public ResponseEntity<String> deleteDonor(@PathVariable String username, @PathVariable String password) {
        try {
            boolean isDeleted = donorService.deleteDonorByUsernameAndPassword(username, password);
            if (isDeleted) {
                return ResponseEntity.ok("Donor deleted successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Donor not found or password incorrect");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error while deleting donor");
        }
    }

}
