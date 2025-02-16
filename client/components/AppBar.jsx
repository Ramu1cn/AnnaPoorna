import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Import an icon set

const AppBar = ({ onProfilePress, onAboutPress }) => {
    return (
        <View style={styles.appBar} className={"w-full mt-5"}>
            <TouchableOpacity onPress={onAboutPress} style={styles.aboutButton}>
                <Text style={styles.buttonText}>About Us</Text>
            </TouchableOpacity>
            <Text style={styles.appBarTitle}></Text>
            <TouchableOpacity onPress={onProfilePress} style={styles.profileButton}>
                <Icon name="settings-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        ...StyleSheet.absoluteFillObject, // Extends to full width and height
        backgroundColor: "rgba(102,244,134,0.6)", // Matches appBar background
    },
    appBar: {
        height: 60,
        backgroundColor: "#1E1E2D",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,

        marginLeft:-20,


        shadowColor: "#000",
        shadowOffset: { width: 50, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
        marginTop: -2,
        paddingTop: 15,
        borderRadius: 8,
        width: "110%",
    },
    appBarTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    profileButton: {
        backgroundColor: "#00A5FF",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    aboutButton: {
        backgroundColor: "#00A5FF",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },
});

export default AppBar;
