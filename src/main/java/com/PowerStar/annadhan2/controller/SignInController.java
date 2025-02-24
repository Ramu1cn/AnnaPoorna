package com.PowerStar.annadhan2.controller;

import com.PowerStar.annadhan2.entity.SignIn;
import com.PowerStar.annadhan2.service.DistributorService;
import com.PowerStar.annadhan2.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Signin")
public class SignInController {

    @Autowired
    private DonorService donorService;

    @Autowired
    private DistributorService distributorService;
    @PostMapping
    public ResponseEntity<String> signin(@RequestBody SignIn signinRequest) {
        boolean isValiddonor = donorService.validateDonor(signinRequest.getEmail(), signinRequest.getPassword());
        boolean isValiddistributor = distributorService.validateDistributor(signinRequest.getEmail(), signinRequest.getPassword());

        if (isValiddonor ) {
            return ResponseEntity.ok("Sign-in successful Donor");
        }
        else if ( isValiddistributor) {
            return ResponseEntity.ok("Sign-in successful Distributor");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }


}
