package com.PowerStar.annadhan2.serviceImpl;

import com.PowerStar.annadhan2.DTO.DonorDto;
import com.PowerStar.annadhan2.entity.Donor;
import com.PowerStar.annadhan2.repository.DonorRepository;
import com.PowerStar.annadhan2.service.DonationaService;
import com.PowerStar.annadhan2.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("DonorService")
public class DonorServiceImpl implements DonorService {

    @Autowired
    private DonorRepository donorRepository;

    private DonationaService donationaService;

    @Autowired
    public DonorServiceImpl(DonorRepository donorRepository, DonationaService donationaService) {
        this.donorRepository = donorRepository;
        this.donationaService = donationaService;
    }

    private Donor DonorDtoToDonor(DonorDto donorDto){ //to receive data from JSON
        Donor donor = new Donor();
        donor.setFullName(donorDto.getFullName());
        donor.setUserName(donorDto.getUserName());
        donor.setMobileNum(donorDto.getMobileNum());
        donor.setStreetName(donorDto.getStreetName());
        donor.setCity(donorDto.getCity());
        donor.setDistrict(donorDto.getDistrict());
        donor.setState(donorDto.getState());
        donor.setPincode(donorDto.getPincode());
        donor.setEmail(donorDto.getEmail());
        donor.setPassword(donorDto.getPassword());
        donor.setLoginType(donorDto.getLoginType());
        //donor.setId(donor.getId());
        return donor;
    }
    private DonorDto DonorToDonorDto(Donor donor){ //to sent data to JSON
        DonorDto donorDto = new DonorDto();
        donorDto.setFullName(donor.getFullName());
        donorDto.setUserName(donor.getUserName());
        donorDto.setMobileNum(donor.getMobileNum());
        donorDto.setStreetName(donor.getStreetName());
        donorDto.setCity(donor.getCity());
        donorDto.setDistrict(donor.getDistrict());
        donorDto.setState(donor.getState());
        donorDto.setPincode(donor.getPincode());
        donorDto.setEmail(donor.getEmail());
        donorDto.setPassword(donor.getPassword());
        donorDto.setLoginType(donor.getLoginType());
        donorDto.setId(donor.getId());
        return donorDto;
    }

    private DonorDto OptionalDonorToDonorDto(Optional<Donor> donorOptional) {
        if (donorOptional.isEmpty()) {
            throw new RuntimeException("Donor not found");
        }

        Donor donor = donorOptional.get(); // Now it's safe to call get
        DonorDto donorDto = new DonorDto();
        donorDto.setFullName(donor.getFullName());
        donorDto.setUserName(donor.getUserName());
        donorDto.setMobileNum(donor.getMobileNum());
        donorDto.setStreetName(donor.getStreetName());
        donorDto.setCity(donor.getCity());
        donorDto.setDistrict(donor.getDistrict());
        donorDto.setState(donor.getState());
        donorDto.setPincode(donor.getPincode());
        donorDto.setEmail(donor.getEmail());
        donorDto.setPassword(donor.getPassword());
        donorDto.setLoginType(donor.getLoginType());
        donorDto.setId(donor.getId());
        return donorDto;
    }


    @Override
    public DonorDto create(DonorDto donorDto) {

         Donor donor = DonorDtoToDonor(donorDto);
         donor = donorRepository.save(donor);
        return DonorToDonorDto(donor);
    }

    @Override
    public DonorDto getByUserName(String userName) {
        Optional<Donor> donorOptional = donorRepository.findByUserName(userName);
        if (donorOptional.isPresent()) {
            // Convert to DTO if present
            return OptionalDonorToDonorDto(donorOptional);
        } else {
            // Handle case where donor is not found
            throw new RuntimeException("Donor with username '" + userName + "' not found");
        }
    }

    @Override
    public boolean validateDonor(String userName, String password) {
        return donorRepository.findByUserNameAndPassword(userName, password).isPresent();

    }

    @Override
    public boolean deleteDonorByUsernameAndPassword(String username, String password) {
        Optional<Donor> donorOptional = donorRepository.findByUserNameAndPassword(username, password);
        if (donorOptional.isPresent()) {
            Donor donor = donorOptional.get();

            // Delete related donations first
            donationaService.deleteDonationsByDonor(donor);

            // Now delete the donor
            donorRepository.delete(donor);
            return true;
        }
        return false;
    }


}
