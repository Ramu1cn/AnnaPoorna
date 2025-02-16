import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, Button, Image } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

export default function App() {
    const [foodType, setFoodType] = useState("");
    const [foodPrepTime, setfoodPrepTime] = useState("");
    const [address, setAddress] = useState("");
    const [lane, setLane] = useState("");
    const [street, setStreet] = useState("");
    const [quantity, setquantity] = useState("");
    const [imageUri, setImageUri] = useState(null); // Store selected image URI

    const foodOptions = [
        { id: "1", label: "Vegetarian", value: "Vegetarian", color: "white" },
        { id: "2", label: "Non-Vegetarian", value: "Non-Vegetarian", color: "white" },
        { id: "3", label: "Both", value: "Both", color: "white" },
    ];

    const handleSubmit = () => {
        console.log("Food Type:", foodType);
        console.log("Preparation Time:", foodPrepTime);
        console.log("Address:", address);
        console.log("Quantity:", quantity);
        console.log("Street:", street);
        console.log("Lane:", lane);
        console.log("Image:", imageUri);

        alert("Ticket created successfully!");
    };

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
        <View style={styles.container}>
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
                onChangeText={(text) => setquantity(text)}
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
            <Button title="Create Ticket" onPress={handleSubmit} />
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
