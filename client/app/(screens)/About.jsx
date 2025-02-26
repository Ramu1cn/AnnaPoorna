import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const About = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>About Us</Text>
                <Text style={styles.text}>
                    Sravan: Developed the main interface, including screens: Donor page,
                    Distribution page, Home page (Frontend).
                </Text>
                <Text style={styles.text}>
                    Rama Krishna: Developed the backend components used in the app.
                </Text>
                <Text style={styles.text}>
                    Ramu C N: Developed user login pages, profile page, report page, and
                    established connections between frontend and backend.
                </Text>
                <Text style={styles.text}>
                    {"\n"}The motivation behind developing this app is to empower individuals to contribute
                    to causes they care about, fostering a sense of community and collective responsibility.
                    By simplifying the donation process and making it easy to track contributions, the app
                    encourages more people to get involved in charitable actions.
                </Text>
                <Text style={styles.text}>
                    It aims to provide transparency in how donations are utilized and ensure that users feel
                    their efforts are making a meaningful impact. The app also seeks to build a network of
                    like-minded individuals who can collaborate to help those in need. Ultimately, the goal
                    is to create a platform that facilitates positive change and social good.
                </Text>
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
    content: {
        marginTop: 20,
        marginBottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        color: "#D1D1D1",
        marginBottom: 10, // Space between paragraphs
    },
});

export default About;
