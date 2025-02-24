import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const AppBar = () => {
    const navigation = useNavigation(); // ✅ Ensure navigation is available

    return (
        <View style={styles.appBar}>
            {/* About Us Button */}
            <TouchableOpacity
                onPress={() => navigation.navigate("About")}
                style={styles.aboutButton}
            >
                <Text style={styles.buttonText}>About Us</Text>
            </TouchableOpacity>

            <Text style={styles.appBarTitle}></Text>

            {/* Navigate to AboutApp screen */}
            <TouchableOpacity
                onPress={() => navigation.navigate("About")} // ✅ Fixed
                style={styles.profileButton}
            >
                <Icon name="settings-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    appBar: {
        height: 60,
        backgroundColor: "#1E1E2D",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 50,
        marginTop: 20,
        paddingTop: 15,
        borderRadius: 8,
        width: "110%",
    },
    profileButton: {
        backgroundColor: "#00A5FF",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
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
