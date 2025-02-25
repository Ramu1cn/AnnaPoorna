import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.text}>
          This is the About Us page where you can add information about your app, company, or anything else.
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
  },
});

export default About;
