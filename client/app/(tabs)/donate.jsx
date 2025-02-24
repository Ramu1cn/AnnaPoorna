import React, { useState } from "react";
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Button,
    Image,
    Alert
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import CustomButton from "../../components/CustomButton";
import RadioGroup from "react-native-radio-buttons-group";

export default function DonateScreen() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [foodPrepTime, setFoodPrepTime] = useState("");
    const [address, setAddress] = useState("");
    const [userName, setUserName] = useState("");
    const [place, setPlace] = useState("");
    const [quantity, setQuantity] = useState("");
    const [imageUri, setImageUri] = useState(null);

    const [foodType, setFoodType] = useState("VEG");
    const foodTypeOptions = [
        { id: "VEG", label: "VEG", value: "VEG", color: "#4CAF50" },
        { id: "NONVEG", label: "NONVEG", value: "NONVEG", color: "#F44336" },
        { id: "BOTH", label: "BOTH", value: "BOTH", color: "#FF9800" }
    ];

    // Function to pick image from camera
    const openCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.3, // Reduce size directly
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    // Function to pick image from gallery
    const openGallery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.2, // Reduce size directly
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    // Handle submit action
    const handleSubmit = async () => {
        if (!address || !userName || !place || !foodPrepTime || !quantity) {
            Alert.alert("Error", "Please fill all fields.");
            return;
        }

        setIsSubmitting(true);
        try {
            const donation = {
                email: "test@example.com",
                 userName,
                address,
                place,
                foodPrepTime,
                foodType,
                quantity,
                image: imageUri
            };

            const response = await axios.post("http://10.25.85.160:8080/Donation", donation);
            if (response.status === 200) {
                Alert.alert("Success", "Donation ticket created successfully!");
            } else {
                Alert.alert("Error", "Failed to create donation ticket.");
            }
        } catch (error) {
            console.log("Error:", error.message);
            Alert.alert("Error", error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.label, { fontSize: 24 }]}>Enter Food Details:</Text>

            <Text style={styles.label}>Food Type:</Text>
            <View style={styles.radioGroup}>
                <RadioGroup
                    radioButtons={foodTypeOptions}
                    onPress={setFoodType}
                    selectedId={foodType}
                    layout="row"
                />
            </View>

            <TextInput
                style={styles.input}
                placeholder="Preparation Time (hrs:min)"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                value={foodPrepTime}
                onChangeText={setFoodPrepTime}
                keyboardType="default"
            />
            <TextInput
                        style={styles.input}
                        placeholder="Enter Your USER Name"
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                        value={userName}
                        onChangeText={setUserName}
                    />

            <TextInput
                style={styles.input}
                placeholder="Address (Detailed Address)"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                value={address}
                onChangeText={setAddress}
            />

            <TextInput
                style={styles.input}
                placeholder="Place"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                value={place}
                onChangeText={setPlace}
            />

            <TextInput
                style={styles.input}
                placeholder="Quantity (in kg)"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                value={quantity}
                onChangeText={(text) => {
                    const numericValue = text.replace(/[^0-9]/g, ""); // Remove non-numeric characters
                    setQuantity(numericValue);
                }}
                keyboardType="numeric"
            />

            <View style={styles.buttonContainer}>
                <Button title="Take Photo" onPress={openCamera} />
                <Button title="Choose from Gallery" onPress={openGallery} />
            </View>

            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

            <CustomButton
                title="Create Ticket"
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
        backgroundColor: "#1A1B4180"
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: "white"
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: "#fff"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
        marginBottom: 20
    },
    image: {
        width: 150, // Smaller image size
        height: 150,
        borderRadius: 10,
        marginTop: 10
    },
    radioGroup: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
        marginBottom: 20
    }
});
