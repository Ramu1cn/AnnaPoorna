package com.PowerStar.annadhan2.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DistributorAccepted {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long distributionAccepted_id;

    private String address;

    private String userName;
    private String email;
    private Long mobileNum;
    private String foodPrepTime;
    @Enumerated(EnumType.STRING)
    private Donation.FoodType foodType;

    public enum FoodType {
        ACTIVE,
        INACTIVE,
        PENDING
    }
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "Distributors_id")
    private Distributor distributor;

    private List<String> items;
    private double quantity;
    private String image;
    private String place;

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public Long getDistributionAccepted_id() {
        return distributionAccepted_id;
    }

    public void setDistributionAccepted_id(Long distributionAccepted_id) {
        this.distributionAccepted_id = distributionAccepted_id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getMobileNum() {
        return mobileNum;
    }

    public void setMobileNum(Long mobileNum) {
        this.mobileNum = mobileNum;
    }

    public String getFoodPrepTime() {
        return foodPrepTime;
    }

    public void setFoodPrepTime(String foodPrepTime) {
        this.foodPrepTime = foodPrepTime;
    }

    public Donation.FoodType getFoodType() {
        return foodType;
    }

    public void setFoodType(Donation.FoodType foodType) {
        this.foodType = foodType;
    }

    public Distributor getDistributor() {
        return distributor;
    }

    public void setDistributor(Distributor distributor) {
        this.distributor = distributor;
    }

    public List<String> getItems() {
        return items;
    }

    public void setItems(List<String> items) {
        this.items = items;
    }

    public double getQuantity() {
        return quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
