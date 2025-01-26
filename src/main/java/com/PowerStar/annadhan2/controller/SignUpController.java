package com.PowerStar.annadhan2.controller;

import com.PowerStar.annadhan2.DTO.DistributorDto;
import com.PowerStar.annadhan2.DTO.DonorDto;
import com.PowerStar.annadhan2.entity.Distributor;
import com.PowerStar.annadhan2.service.DistributorService;
import com.PowerStar.annadhan2.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignUpController {

        @Autowired
        private DonorService donorService;
        @Autowired
        private DistributorService distributorService;

    public SignUpController(DonorService donorService, DistributorService distributorService) {
        this.donorService = donorService;
        this.distributorService = distributorService;
    }

    @PostMapping("/signup")
     public ResponseEntity signup(@RequestBody DonorDto donorDto){
         if("DONOR".equals(donorDto.getLoginType())){
             DonorDto donorDto1 = donorService.create(donorDto);
             return ResponseEntity.ok(donorDto1);
         }else{
             DistributorDto distributorDto = distributorService.create(donorDto);
             return ResponseEntity.ok(distributorDto);
         }

     }
}
/*
public ResponseEntity signup(@RequestBody DonorDto donorDto) {
    if ("DONOR".equals(donorDto.getLoginType())) {
        DonorDto donorDto1 = donorService.create(donorDto);
        return ResponseEntity.ok(donorDto1);
    } else if ("DISTRIBUTOR".equals(donorDto.getLoginType())) {
        DistributorDto distributorDto = distributorService.create(donorDto);
        return ResponseEntity.ok(distributorDto);
    } else {
        return ResponseEntity.badRequest().body("Invalid login type");
    }
}
 */