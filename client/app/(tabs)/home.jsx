import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const Home = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            {/* App Bar */}
            <View style={styles.appBar}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('About')}
                    style={styles.aboutButton}
                >
                    <Text style={styles.buttonText}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("AboutApp")}
                    style={styles.profileButton}
                >
                    <Icon name="settings-outline" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            {/* Stats Section */}
            <View style={styles.box1}>
                <View style={[styles.nestedBox]}>
                    <Text style={styles.titleText}>Donations</Text>
                    <Text style={styles.valueText}>105</Text>
                </View>
                <View style={styles.nestedBox}>
                    <Text style={styles.titleText}>Rank</Text>
                    <View style={styles.rankContainer}>
                        <Image
                            source={require("../../assets/images/rank_badge.png")}
                            style={styles.rankImage}
                            resizeMode="contain"
                        />
                        <Text style={styles.valueText}>5</Text>
                    </View>
                </View>
                <View style={[styles.nestedBox]}>
                    <Text style={styles.titleText}>Quantity</Text>
                    <Text style={styles.valueText}>50</Text>
                </View>
                <View style={[styles.nestedBox]}>
                    <Text style={styles.titleText}>People</Text>
                    <Text style={styles.valueText}>80</Text>
                </View>
            </View>

            {/* Donation History Section */}
            <View style={styles.box}>
                <Text style={styles.contributionText}>Your Contributions</Text>
                <ScrollView style={styles.scrollView}>
                    {[...Array(10)].map((_, index) => (
                        <View key={index} style={styles.card}>
                            <Text style={styles.transparentText}>History</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1B4180",
        paddingHorizontal: 16,
    },
    appBar: {
        height: 60,
        backgroundColor: "#1E1E2D",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 20,
        paddingTop: 15,
        borderRadius: 8,
        width: "100%",
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
    box1: {
        flex: 0.35,
        backgroundColor: "#1B1F3B",
        marginTop: 20,
        borderRadius: 20,
        marginHorizontal: 20,
        marginBottom: 40,
        padding: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    nestedBox: {
        width: "45%",
        aspectRatio: 1.7,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#333333",
        borderWidth: 2,
        borderColor: "#D1D1D1",
        borderRadius: 10,
        margin: 5,
    },
    box: {
        flex: 0.8,
        backgroundColor: "transparent",
        borderRadius: 10,
        marginTop: 40,
        marginBottom: 30,
        alignItems: "center",
    },
    scrollView: {
        flex: 1,
        height: "180%",
        width: "100%",
        marginTop: -20,
    },
    card: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        padding: 16,
        marginBottom: 10,
        borderRadius: 10,
        elevation: 20,
    },
    transparentText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "rgba(255, 255, 255, 0.5)",
    },
    contributionText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "rgba(255, 255, 255, 0.8)",
        marginBottom: 10,
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#D1D1D1",
    },
    valueText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#FFFFFF",
        marginTop: 8,
    },
    rankContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    rankImage: {
        width: 50,
        height: 50,
        marginRight: 8,
        borderRadius: 12,
    },
});

export default Home;
