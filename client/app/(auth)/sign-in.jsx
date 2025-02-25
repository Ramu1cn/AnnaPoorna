import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {
    const [form, setForm] = useState({
        email: 'ramu@gmail.com',
        password: '123456',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert("Error", "Please fill all the fields.");
            return;
        }

        setIsSubmitting(true);

        try {
            // Make the API request to the backend
            const response = await axios.post('http://10.25.85.160:8080/Signin', form);

            // Check if the response is successful
            if (response.status === 200) {
                const responseData = response.data;
                console.log(responseData); // Log response for debugging

                // Save user data to AsyncStorage
                await AsyncStorage.setItem('email', form.email);
                await AsyncStorage.setItem('password', form.password);

                // Navigate based on response
                if (responseData.includes("Sign-in successful Donor")) {
                    router.replace("/home");
                } else if (responseData.includes("Sign-in successful")) {
                    router.replace("/home");
                } else {
                    Alert.alert("Error", "Invalid credentials.");
                }
            } else {
                Alert.alert("Error", "Invalid credentials.");
            }

        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SafeAreaView className={"bg-primary h-full"}>
            <ScrollView>
                <View className={"w-full justify-center min-h-[85vh] px-4 my-6"}>
                    <Image
                        source={images.logo2}
                        resizeMode={"contain"}
                        className={"w-[115px] h-[135px]"}
                    />
                    <Text className={"text-2xl text-white text-semibold mt-10 font-psemibold"}>
                        Log in to AnnaPoorna
                    </Text>

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />

                    <CustomButton
                        title={"Sign In"}
                        handlePress={submit}
                        containerStyles={"mt-7"}
                        isLoading={isSubmitting}
                    />

                    <View className={"justify-center pt-5 flex-row gap-2"}>
                        <Text className={"text-lg text-gray-100 font-pregular"}>
                            Don't have an account?
                        </Text>

                        <Link href={"/sign-up"} className={"text-lg font-semibold text-secondary"}>
                            Sign Up
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;
