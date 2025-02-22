package com.PowerStar.annadhan2.repository;

import com.PowerStar.annadhan2.entity.Distributor;
import com.PowerStar.annadhan2.entity.Donor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DistributorRepository extends JpaRepository<Distributor, Long> {

    Optional<Distributor> findByUserName(String userName);

    Optional<Distributor> findByUserNameAndPassword(String userName, String password);

}
