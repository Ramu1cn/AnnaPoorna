import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import About from "../(screens)/About";  // Make sure About component path is correct
import AboutApp from "../(screens)/AboutApp";  // Make sure AboutApp component path is correct

const Home = () => {
  const [isAboutModalVisible, setAboutModalVisible] = useState(false); // State for About Us modal visibility
  const [isAboutAppModalVisible, setAboutAppModalVisible] = useState(false); // State for AboutApp modal visibility
  const navigation = useNavigation();

  const openAboutModal = () => {
    setAboutModalVisible(true);
  };

  const closeAboutModal = () => {
    setAboutModalVisible(false);
  };

  const openAboutAppModal = () => {
    setAboutAppModalVisible(true);
  };

  const closeAboutAppModal = () => {
    setAboutAppModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={openAboutModal} style={styles.aboutButton}>
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>
  <TouchableOpacity onPress={openAboutAppModal} style={styles.aboutButton}>
          <Text style={styles.buttonText}>About App</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Section */}
      <View style={styles.box1}>
        <View style={styles.nestedBox}>
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
        <View style={styles.nestedBox}>
          <Text style={styles.titleText}>Quantity</Text>
          <Text style={styles.valueText}>50</Text>
        </View>
        <View style={styles.nestedBox}>
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

      {/* Modal Section for About Us */}
      <Modal
        transparent={true}
        visible={isAboutModalVisible}
        animationType="fade"
        onRequestClose={closeAboutModal}
      >
        <TouchableWithoutFeedback onPress={closeAboutModal}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <About /> {/* Your About component here */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={closeAboutModal}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Modal Section for About App */}
      <Modal
        transparent={true}
        visible={isAboutAppModalVisible}
        animationType="fade"
        onRequestClose={closeAboutAppModal}
      >
        <TouchableWithoutFeedback onPress={closeAboutAppModal}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <AboutApp /> {/* Your AboutApp component here */}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={closeAboutAppModal}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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

  // Full-Screen Modal styles
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Darken the background
  },
  modalContainer: {
    backgroundColor: "#fff",
    flex: 1, // Make it take the full screen
    width: "100%", // Full width of the screen
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#00A5FF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  closeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Home;
