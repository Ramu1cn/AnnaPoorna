package com.PowerStar.annadhan2.service;

import com.PowerStar.annadhan2.DTO.DonationDto;
import com.PowerStar.annadhan2.entity.Donation;
import com.PowerStar.annadhan2.entity.Donor;

import java.util.List;

public interface DonationaService {

    public DonationDto create(DonationDto donationDto);

    public List<Donation> getDonationsByDonoruserName(String userName);

    public void deleteDonationsByDonor(Donor donor);
}
