package com.PowerStar.annadhan2.entity;

import com.PowerStar.annadhan2.DTO.DonorDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long donation_id;

    private String address;

    @Column(name = "user_name")
    private String userName;
    private String email;
    private Long mobileNum;
    private String foodPrepTime;
    @Enumerated(EnumType.STRING)
    private FoodType foodType;

    public enum FoodType {
        VEG,       // Active changed to Veg
        NONVEG,    // Inactive changed to NonVeg
        BOTH       // Pending changed to Both
    }
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Donars_id")
    @JsonIgnore
    private Donor donar;

    private List<String> items;
    private Double quantity;
    private String image;
    private String place;

    public Long getDonation_id() {
        return donation_id;
    }

    public void setDonation_id(Long donation_id) {
        this.donation_id = donation_id;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
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

    public FoodType getFoodType() {
        return foodType;
    }

    public void setFoodType(FoodType foodType) {
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
