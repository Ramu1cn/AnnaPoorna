package com.PowerStar.annadhan2.repository;

import com.PowerStar.annadhan2.entity.Donor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DonorRepository extends JpaRepository<Donor, Long> {

    Optional<Donor> findByUserName(String userName);

    Optional<Donor> findByUserNameAndPassword(String userName, String password);


}
