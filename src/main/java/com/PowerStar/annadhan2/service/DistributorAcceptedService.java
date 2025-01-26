package com.PowerStar.annadhan2.service;

import com.PowerStar.annadhan2.DTO.DistributorAcceptedDto;
import com.PowerStar.annadhan2.entity.DistributorAccepted;
import com.PowerStar.annadhan2.entity.Donation;
import org.springframework.stereotype.Service;

import java.util.List;

public interface DistributorAcceptedService {

    public DistributorAccepted create(Donation donation, String distributorUserName);

    public List<DistributorAccepted> getDistributorAcceptedByDistributoruserName(String distributoruserName);
}
