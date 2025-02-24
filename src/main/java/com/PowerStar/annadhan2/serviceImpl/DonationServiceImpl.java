package com.PowerStar.annadhan2.serviceImpl;

import com.PowerStar.annadhan2.DTO.DonationDto;
import com.PowerStar.annadhan2.DTO.DonorDto;
import com.PowerStar.annadhan2.controller.DonorController;
import com.PowerStar.annadhan2.entity.Donation;
import com.PowerStar.annadhan2.entity.Donor;
import com.PowerStar.annadhan2.repository.DonationRepository;
import com.PowerStar.annadhan2.repository.DonorRepository;
import com.PowerStar.annadhan2.service.DonationaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonationServiceImpl implements DonationaService {


    private DonationRepository donationRepository;
//    @Lazy
//    private DonorServiceImpl donorServiceimpl;

    private DonorRepository donorRepository;

    @Autowired
    public DonationServiceImpl(DonationRepository donationRepository/* DonorServiceImpl donorServiceimpl */, DonorRepository donorRepository) {
        this.donationRepository = donationRepository;
       // this.donorServiceimpl = donorServiceimpl;
        this.donorRepository = donorRepository;
    }

    private Donation donationDtoToDonation(DonationDto donationDto){
        //To recieve data from JSON and adding id of user to Donation object using getDonorByUsername method in
        //Donorcontroller.
        Donation donation = new Donation();
        donation.setAddress(donationDto.getAddress());
        donation.setUserName(donationDto.getUserName());
        donation.setEmail(donationDto.getEmail());
        donation.setMobileNum(donationDto.getMobileNum());
        donation.setFoodPrepTime(donationDto.getFoodPrepTime());
        donation.setQuantity(donationDto.getQuantity());
        donation.setImage(donationDto.getImage());
        donation.setItems(donationDto.getItems());
        donation.setPlace(donationDto.getPlace());

        return donation;
    }

    private DonationDto donationToDonationDto(Donation donation) {
        DonationDto donationDto = new DonationDto();
        donationDto.setAddress(donation.getAddress());
        donationDto.setUserName(donation.getUserName());
        donationDto.setEmail(donation.getEmail());
        donationDto.setMobileNum(donation.getMobileNum());
        donationDto.setFoodPrepTime(donation.getFoodPrepTime());
        donationDto.setQuantity(donation.getQuantity());
        donationDto.setImage(donation.getImage());
        donationDto.setItems(donation.getItems());
        donationDto.setPlace(donation.getPlace());
        donationDto.setDonation_id(donation.getDonation_id());

        if (donation.getDonar() != null) {
            donationDto.setDonar(donation.getDonar());
        }
        return donationDto;
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
        donor.setId(donor.getId());
        return donor;
    }


//SAVING DONATION DATA iN DB
    @Override
    public DonationDto create(DonationDto donationDto) {
        // Convert DonationDto to Donation entity
        Donation donation = donationDtoToDonation(donationDto);

        // Fetch Donor from the repository using username
        Donor donor = donorRepository.findByUserName(donation.getUserName())
                .orElseThrow(() -> new RuntimeException("Donor not found"));

        // Set the Donor in the Donation
        donation.setDonar(donor);

        // Save the Donation entity
        donation = donationRepository.save(donation);

        // Convert Donation entity to DonationDto for response
        return donationToDonationDto(donation);
    }

    //GETTING LIST OF DONATIONS BY DONOR
    public List<Donation> getDonationsByDonoruserName(String userName){
        Donor donor = donorRepository.findByUserName(userName)
                .orElseThrow(() -> new RuntimeException("Donor not found"));

        Long id = donor.getId();
        List<Donation> donations = donationRepository.findByUserName(userName);
        System.out.print("donataions table is called");
        return donations;

    }


//    public List<Donation> getDonationsByDonoruserName(String userName) {
//        // Fetch donations by username
//        List<Donation> donations = donationRepository.findByDonarUserName(userName);
//
//        // If no donations exist, throw an exception
//        if (donations.isEmpty()) {
//            throw new RuntimeException("Username not found in donation table");
//        }
//
//        return donations;
//    }




    public void deleteDonationsByDonor(Donor donor) {
        List<Donation> donations = donationRepository.findByDonar(donor);
        if (donations != null && !donations.isEmpty()) {
            donationRepository.deleteAll(donations);
        }
    }

}
