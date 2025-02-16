import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    Image,
} from "react-native";

const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from the backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // Example API
                const result = await response.json();
                setData(result.slice(0, 20)); // Fetch the first 20 items for simplicity
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {/* Box1 with nested boxes */}
            <View style={styles.box1}>
                <View style={[styles.nestedBox, styles.topLeft]}>
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
                <View style={[styles.nestedBox, styles.bottomLeft]}>
                    <Text style={styles.titleText}>Quantity</Text>
                    <Text style={styles.valueText}>50</Text>
                </View>
                <View style={[styles.nestedBox, styles.bottomRight]}>
                    <Text style={styles.titleText}>People</Text>
                    <Text style={styles.valueText}>80</Text>
                </View>
            </View>

            {/* Box2 with fetched data */}
            <View style={styles.box}>
                {loading ? (
                    <ActivityIndicator size="large" color="#00ff00" />
                ) : (
                    <ScrollView style={styles.scrollView}>
                        {data.map((item) => (
                            <View key={item.id} style={styles.card}>
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        ))}
                    </ScrollView>
                )}
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1A1B4180",
        paddingHorizontal: 16,
        justifyContent: "space-between",
    },
    box1: {
        flex: 0.35,
        backgroundColor: "#1B1F3B",
        marginTop: 20,
        borderRadius: 20,
        marginHorizontal: 20,
        padding: 10,
        flexDirection: "row", // Enables row layout
        flexWrap: "wrap", // Allows wrapping to the next row
        justifyContent: "space-around", // Adds space between boxes
    },
    nestedBox: {
        width: "35%", // Reduced size to 70% of the original
        aspectRatio: 1.7, // Ensures the box is square
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#333333",
        borderWidth: 2,
        borderColor: "#D1D1D1",
        borderRadius: 10,
        margin: 5, // Adds spacing between boxes
    },
    box: {
        flex: 0.6,
        backgroundColor: "#e0e0e0",
        borderRadius: 10,
        marginTop: 40,
        shadowColor: "#000",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        marginBottom: 30,
    },
    scrollView: {
        flex: 1,
    },
    card: {
        backgroundColor: "#fff",
        padding: 16,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#555",
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

export default App;
