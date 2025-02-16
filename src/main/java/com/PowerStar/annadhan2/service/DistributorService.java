package com.PowerStar.annadhan2.service;

import com.PowerStar.annadhan2.DTO.DistributorDto;
import com.PowerStar.annadhan2.DTO.DonorDto;

public interface DistributorService {

    public DistributorDto create(DonorDto donorDto);

    public boolean validateDistributor(String userName, String password);

    public void deleteDistributorByUserName(String userName);

    public boolean deleteDistributorByUsernameAndPassword(String username, String password);
}
