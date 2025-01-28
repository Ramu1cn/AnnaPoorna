package com.PowerStar.annadhan2.repository;

import com.PowerStar.annadhan2.entity.Donation;
import com.PowerStar.annadhan2.entity.Donor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Long> {

    List<Donation> findByDonarUserName(String userName);



    List<Donation> findByDonar(Donor donor);
}
