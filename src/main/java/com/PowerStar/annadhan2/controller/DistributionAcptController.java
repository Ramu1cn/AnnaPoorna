package com.PowerStar.annadhan2.controller;

import com.PowerStar.annadhan2.entity.DistributorAccepted;
import com.PowerStar.annadhan2.entity.Donation;
import com.PowerStar.annadhan2.service.DistributorAcceptedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/DistributorAccepted")
public class DistributionAcptController {
    @Autowired
    private DistributorAcceptedService distributorAcceptedService;

    public DistributionAcptController(DistributorAcceptedService distributorAcceptedService) {
        this.distributorAcceptedService = distributorAcceptedService;
    }

    @PostMapping("{distributorUserName}")
    public ResponseEntity Distributoraccepted(@RequestBody Donation donation, @PathVariable("distributorUserName")String distributorUserName){
        DistributorAccepted distributoraccepted = distributorAcceptedService.create(donation, distributorUserName);
        return ResponseEntity.ok(distributoraccepted);

    }

    @GetMapping("/donations/{distributoruserName}")
    public ResponseEntity<List<DistributorAccepted>> getDonationsByDonorId(@PathVariable String distributoruserName) {
        // Call the service to get the donations
        System.out.println(distributoruserName);
        List<DistributorAccepted> distributions = distributorAcceptedService.getDistributorAcceptedByDistributoruserName(distributoruserName);

        return ResponseEntity.ok(distributions);
    }
}
