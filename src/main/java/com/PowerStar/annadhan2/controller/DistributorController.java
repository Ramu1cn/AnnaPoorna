package com.PowerStar.annadhan2.controller;

import com.PowerStar.annadhan2.service.DistributorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Distributor")
public class DistributorController {

  private DistributorService distributorService;

    public DistributorController(DistributorService distributorService) {
        this.distributorService = distributorService;
    }

    @DeleteMapping("/delete/{username}/{password}")
    public ResponseEntity<String> deleteDistributor(@PathVariable String username, @PathVariable String password) {
        try {
            boolean isDeleted = distributorService.deleteDistributorByUsernameAndPassword(username, password);
            if (isDeleted) {
                return ResponseEntity.ok("Distributor deleted successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Distributor not found or password incorrect");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error while deleting Distributor");
        }
    }
}
