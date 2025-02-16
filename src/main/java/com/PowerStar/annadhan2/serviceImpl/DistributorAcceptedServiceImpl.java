package com.PowerStar.annadhan2.serviceImpl;

import com.PowerStar.annadhan2.DTO.DistributorAcceptedDto;
import com.PowerStar.annadhan2.DTO.DistributorDto;
import com.PowerStar.annadhan2.entity.Distributor;
import com.PowerStar.annadhan2.entity.DistributorAccepted;
import com.PowerStar.annadhan2.entity.Donation;
import com.PowerStar.annadhan2.repository.DistributorAcceptedRepository;
import com.PowerStar.annadhan2.repository.DistributorRepository;
import com.PowerStar.annadhan2.service.DistributorAcceptedService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DistributorAcceptedServiceImpl implements DistributorAcceptedService {

    private DistributorRepository distributorRepository;
    private DistributorAcceptedRepository distributorAcceptedRepository;

    @Autowired
    public DistributorAcceptedServiceImpl(DistributorRepository distributorRepository, DistributorAcceptedRepository distributorAcceptedRepository) {
        this.distributorRepository = distributorRepository;
        this.distributorAcceptedRepository = distributorAcceptedRepository;
    }

    private DistributorAcceptedDto donationToDistributorDto(Donation donation){
        DistributorAcceptedDto distributorAcceptedDto = new DistributorAcceptedDto();
        distributorAcceptedDto.setAddress(donation.getAddress());
        distributorAcceptedDto.setUserName(donation.getUserName());
        distributorAcceptedDto.setEmail(donation.getEmail());
        distributorAcceptedDto.setMobileNum(donation.getMobileNum());
        distributorAcceptedDto.setFoodPrepTime(donation.getFoodPrepTime());
        distributorAcceptedDto.setQuantity(donation.getQuantity());
        distributorAcceptedDto.setImage(donation.getImage());
        distributorAcceptedDto.setItems(donation.getItems());
        distributorAcceptedDto.setPlace(donation.getPlace());
        return  distributorAcceptedDto;
    }

    private DistributorAccepted distributorAcceptedDtoToDistributorAccepted(DistributorAcceptedDto distributorAcceptedDto, String distributorUserName ){
        DistributorAccepted distributorAccepted = new DistributorAccepted();
        distributorAccepted.setAddress(distributorAcceptedDto.getAddress());
        distributorAccepted.setUserName(distributorUserName);
        distributorAccepted.setEmail(distributorAcceptedDto.getEmail());
        distributorAccepted.setMobileNum(distributorAcceptedDto.getMobileNum());
        distributorAccepted.setFoodPrepTime(distributorAcceptedDto.getFoodPrepTime());
        distributorAccepted.setQuantity(distributorAcceptedDto.getQuantity());
        distributorAccepted.setImage(distributorAcceptedDto.getImage());
        distributorAccepted.setItems(distributorAcceptedDto.getItems());
        distributorAccepted.setPlace(distributorAccepted.getPlace());
        distributorAccepted.setDistributor(distributorAcceptedDto.getDistributor());
        return distributorAccepted;
    }
    @Override
    public DistributorAccepted create(Donation donation, String distributorUserName) {
        DistributorAcceptedDto distributorAcceptedDto = donationToDistributorDto(donation);
        //distributorAcceptedDto.setUserName(distributorUserName);
        Distributor distributor = distributorRepository.findByUserName(distributorUserName)
                .orElseThrow(() -> new RuntimeException("Distributor not found with username: " + distributorAcceptedDto.getUserName()));

        distributorAcceptedDto.setDistributor(distributor);
        DistributorAccepted distributorAccepted = distributorAcceptedDtoToDistributorAccepted(distributorAcceptedDto, distributorUserName);

        distributorAccepted = distributorAcceptedRepository.save(distributorAccepted);
        return distributorAccepted;
    }

    @Override
    public List<DistributorAccepted> getDistributorAcceptedByDistributoruserName(String distributoruserName) {
        List<DistributorAccepted> distributions = distributorAcceptedRepository.findByDistributorUserName(distributoruserName);
        return distributions;
    }

    @Override
    public void deleteDistributorAcceptedByDistributor(Distributor distributor) {
        List<DistributorAccepted> distributorAccepteds = distributorAcceptedRepository.findByDistributor(distributor);
        if (distributorAccepteds != null && !distributorAccepteds.isEmpty()) {
            distributorAcceptedRepository.deleteAll(distributorAccepteds);
        }
    }



}
