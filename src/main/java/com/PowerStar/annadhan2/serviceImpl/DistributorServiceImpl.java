package com.PowerStar.annadhan2.serviceImpl;

import com.PowerStar.annadhan2.DTO.DistributorDto;
import com.PowerStar.annadhan2.DTO.DonorDto;
import com.PowerStar.annadhan2.entity.Distributor;
import com.PowerStar.annadhan2.entity.Donor;
import com.PowerStar.annadhan2.repository.DistributorRepository;
import com.PowerStar.annadhan2.service.DistributorAcceptedService;
import com.PowerStar.annadhan2.service.DistributorService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("DistributorService")
public class DistributorServiceImpl implements DistributorService {


    private DistributorRepository distributorRepository;

    private DistributorAcceptedService distributorAcceptedService;

    @Autowired
    public DistributorServiceImpl(DistributorRepository distributorRepository, DistributorAcceptedService distributorAcceptedService) {
        this.distributorRepository = distributorRepository;
        this.distributorAcceptedService = distributorAcceptedService;
    }

    private Distributor DonorDtoToDistributor(DonorDto donorDto){ //to receive data from JSON
        Distributor distributor = new Distributor();
        distributor.setFullName(donorDto.getFullName());
        distributor.setUserName(donorDto.getUserName());
        distributor.setMobileNum(donorDto.getMobileNum());
        distributor.setStreetName(donorDto.getStreetName());
        distributor.setCity(donorDto.getCity());
        distributor.setDistrict(donorDto.getDistrict());
        distributor.setState(donorDto.getState());
        distributor.setPincode(donorDto.getPincode());
        distributor.setEmail(donorDto.getEmail());
        distributor.setPassword(donorDto.getPassword());
        distributor.setLoginType(donorDto.getLoginType());
        return distributor;
    }
    private DistributorDto DistributorToDistributorDto(Distributor distributor){ //to sent data to JSON
        DistributorDto distributorDto = new DistributorDto();
        distributorDto.setFullName(distributor.getFullName());
        distributorDto.setUserName(distributor.getUserName());
        distributorDto.setMobileNum(distributor.getMobileNum());
        distributorDto.setStreetName(distributor.getStreetName());
        distributorDto.setCity(distributor.getCity());
        distributorDto.setDistrict(distributor.getDistrict());
        distributorDto.setState(distributor.getState());
        distributorDto.setPincode(distributor.getPincode());
        distributorDto.setEmail(distributor.getEmail());
        distributorDto.setPassword(distributor.getPassword());
        distributorDto.setLoginType(distributor.getLoginType());
        return distributorDto;
    }




    @Override
    public DistributorDto create(DonorDto donorDto) {
        Distributor distributor = DonorDtoToDistributor(donorDto);
        distributor = distributorRepository.save(distributor);
        return DistributorToDistributorDto(distributor);
    }

    @Override
    public boolean validateDistributor(String email, String password) {

            return distributorRepository.findByUserNameAndPassword(email, password).isPresent();

    }

    @Override
    public void deleteDistributorByUserName(String userName) {

    }

    @Override
    public boolean deleteDistributorByUsernameAndPassword(String username, String password) {
        Optional<Distributor> distributorOptional = distributorRepository.findByUserNameAndPassword(username, password);
        if (distributorOptional.isPresent()) {
            Distributor distributor = distributorOptional.get();

            // Delete related donations first

           // distributorAcceptedService.deleteDonationsByDonor(donor);
            distributorAcceptedService.deleteDistributorAcceptedByDistributor(distributor);

            // Now delete the donor
            distributorRepository.delete(distributor);
            return true;
        }
        return false;
    }



}
