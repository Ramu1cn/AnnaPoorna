import React, {useEffect, useState} from "react";
import {View, TextInput, Text, StyleSheet, Button, Image, Alert} from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import {router} from "expo-router";
import CustomButton from "../../components/CustomButton";

export default function App() {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [profile, setProfile] = useState({
        donor_id: null,
        fullName: '',
        userName: '',
        mobileNum: null,
        streetName: '',
        city: '',
        district: '',
        state: '',
        pincode: null,
        email: '',
        password: '',
        loginType: '',
    });

    const [donation, setDonation] = useState({
        email:"",
        address:"",
        userName:"",
        mobileNum:null,
        foodPrepTime:"",
        foodType:"",
        quantity:0,
        image:"",

    });
    const [loading, setLoading] = useState(false);
    const [foodType, setFoodType] = useState("");
    const [foodPrepTime, setfoodPrepTime] = useState("");
    const [address, setAddress] = useState("");
    const [lane, setLane] = useState("");
    const [street, setStreet] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [imageUri, setImageUri] = useState(null); // Store selected image URI

    const foodOptions = [
        { id: "1", label: "Vegetarian", value: "VEG", color: "white" },
        { id: "2", label: "Non-Vegetarian", value: "NONVEG", color: "white" },
        { id: "3", label: "Both", value: "BOTH", color: "white" },
    ];

    // const addressOfDonor = profile.streetName+" "+profile.city+" "+profile.district+" "+profile.state+" "+profile.pincode;
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const email = await AsyncStorage.getItem('email');
                console.log(email);
                const response = await axios.get(`http://10.25.91.116:8080/Donor/email/${email}`);
                setProfile(response.data);
                setDonation({...donation , email: profile.email})
                setDonation({...donation , address:address})
                setDonation({...donation , mobileNum: profile.mobileNum})
                setDonation({...donation , mobileNum: profile.mobileNum})
                setDonation({...donation , foodPrepTime: foodPrepTime})
                setDonation({...donation , foodType: foodType})
                setDonation({...donation , quantity: quantity})

                await asyncStorage.setItem('type', profile.loginType);
                console.log(response.data);

            } catch (err) {
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, []);


    const handleSubmit = async () => {
        setIsSubmitting(true);

        try {
            const response = await axios.post("http://10.25.91.116:8080/Donation", donation);
            if (response.status === 200) {
                Alert.alert("Ticket created successfully");
            } else {
                Alert.alert("Ticket creation failed.");
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log(error.message);
            } else {
                console.log('Error:', error.message);
            }

        } finally {
            setIsSubmitting(false);
        }
    }


    // Function to pick image from camera
    const openCamera = () => {
        launchCamera({ mediaType: "photo", quality: 1 }, (response) => {
            if (response.didCancel) {
                console.log("User cancelled camera picker");
            } else if (response.errorMessage) {
                console.log("Camera Error: ", response.errorMessage);
            } else {
                setImageUri(response.assets[0].uri);
            }
        });
    };

    // Function to pick image from gallery
    const openGallery = () => {
        launchImageLibrary({ mediaType: "photo", quality: 1 }, (response) => {
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.errorMessage) {
                console.log("Gallery Error: ", response.errorMessage);
            } else {
                setImageUri(response.assets[0].uri);
            }
        });
    };

    return (
        <View style={styles.container} >
            <Text style={[styles.label, { fontFamily: "Lobster", fontSize: 30 }]}>Enter Food Details:</Text>

            {/* Food Type Radio Buttons */}
            <View style={styles.radioContainer}>
                <RadioGroup
                    radioButtons={foodOptions}
                    onPress={(value) => setFoodType(value)}
                    selectedId={foodType}
                    layout="row"
                />
            </View>

            <TextInput
                style={styles.input}
                placeholder="Preparation Time"
                value={foodPrepTime}
                onChangeText={(text) => setfoodPrepTime(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={(text) => setAddress(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Quantity"
                value={quantity}
                onChangeText={(text) => setQuantity(parseInt(text,10))}
            />

            <TextInput
                style={styles.input}
                placeholder="Lane"
                value={lane}
                onChangeText={(text) => setLane(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Street"
                value={street}
                onChangeText={(text) => setStreet(text)}
            />

            {/* Image Picker Buttons */}
            <View style={styles.buttonContainer}>
                <View style={{ marginRight: 10 }}>
                    <Button title="Take Photo" onPress={openCamera} />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Button title="Choose from Gallery" onPress={openGallery} />
                </View>
            </View>

            {/* Display Selected Image */}
            {imageUri && (
                <Image source={{ uri: imageUri }} style={styles.image} />
            )}

            {/* Submit Button */}
            <CustomButton
                title={"Create Ticket"}
                handlePress={handleSubmit}
                containerStyles={"mt-7 w-[98%] bg-green"}
                isLoading={isSubmitting}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#1A1B4180",
    },
    label: {
        fontFamily: "Arial",
        fontSize: 18,
        marginBottom: 10,
        color: "white",
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: "#fff",
        fontFamily: "Arial",
    },
    radioContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 10,
    },
});
