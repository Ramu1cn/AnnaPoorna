package com.PowerStar.annadhan2.repository;

import com.PowerStar.annadhan2.entity.DistributorAccepted;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DistributorAcceptedRepository extends JpaRepository<DistributorAccepted, Long> {

    List<DistributorAccepted> findByDistributorUserName(String userName);

}
