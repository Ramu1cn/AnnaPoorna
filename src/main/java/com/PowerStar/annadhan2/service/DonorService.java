package com.PowerStar.annadhan2.service;

import com.PowerStar.annadhan2.DTO.DonorDto;

public interface DonorService {

    public DonorDto create(DonorDto donorDto);

    public DonorDto getByUserName(String userName);

    public boolean validateDonor(String userName, String password);



}
