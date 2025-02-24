package com.PowerStar.annadhan2.controller;

import com.PowerStar.annadhan2.DTO.DistributorDto;
import com.PowerStar.annadhan2.DTO.DonationDto;
import com.PowerStar.annadhan2.DTO.DonorDto;
import com.PowerStar.annadhan2.entity.Donation;
import com.PowerStar.annadhan2.service.DonationaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Donation")
public class DonationController {
    @Autowired
    private DonationaService donationaService;

    public DonationController(DonationaService donationaService) {
        this.donationaService = donationaService;
    }


    @PostMapping()
    public ResponseEntity Donation(@RequestBody DonationDto donationDto){
         DonationDto donationDto1 = donationaService.create(donationDto);
        return  ResponseEntity.ok(donationDto1);
    }


    @GetMapping("/donor/{userName}")
    public ResponseEntity<List<Donation>> getDonationsByDonorId(@PathVariable String userName) {
        // Call the service to get the donations
        List<Donation> donations = donationaService.getDonationsByDonoruserName(userName);
         System.out.print("Came to controller");
        return ResponseEntity.ok(donations);
    }
}
