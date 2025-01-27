package com.PowerStar.annadhan2.DTO;

import com.PowerStar.annadhan2.entity.Donation;
import com.PowerStar.annadhan2.entity.Donor;
import jakarta.persistence.*;

import java.util.List;

public class DonationDto {


    private Long donation_id;

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

    private Donor donar;

    private List<String> items;
    private double quantity;
    private String image;

    private String place;

    public Long getDonation_id() {
        return donation_id;
    }

    public void setDonation_id(Long donation_id) {
        this.donation_id = donation_id;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
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

    public Donor getDonar() {
        return donar;
    }

    public void setDonar(Donor donar) {
        this.donar = donar;
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
