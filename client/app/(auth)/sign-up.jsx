import {View, Text, ScrollView, Image, Alert} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import {Link, router} from "expo-router";
import axios from "axios";

const SignUp = () => {
    const [form, setForm] = useState(
        {
            fullName:"",
            userName: "",
            mobileNum:0,
            streetName:"",
            city:"",
            district:"",
            state:"",
            pincode:0,
            loginType:"DONOR",
            email:'',
            password:'',
        }
    );

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async () => {
        if (!form.userName || !form.fullName || !form.password || !form.city
            || !form.district || !form.streetName || !form.mobileNum || !form.state || !form.pincode ||
            !form.loginType || !form.email || !form.password) {
            Alert.alert("Error", "Please fill all the fields.");
            return;
        }

        setIsSubmitting(true);

        try {
            setForm({...form , mobileNum: parseInt(form.mobileNum,10)});
            setForm({...form , pincode: parseInt(form.pincode,10)});

            const response = await axios.post("http://10.25.85.160:8080/signup", form);
            if (response.status === 200) {
                router.replace("/sign-in");
            } else {
                Alert.alert("Error", "Something went wrong, check your credentials.");
                router.replace("/sign-in");
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                Alert.alert("Error", "Something went wrong, check your credentials.");
                router.replace("/sign-in");
            } else {
                console.log('Error:', error.message);
            }
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
                        Sign Up to AnnaPoorna
                    </Text>

                    <FormField
                        title="Full Name"
                        value={form.fullName}
                        handleChangeText={(e)=>setForm({...form, fullName:e})}
                        otherStyles="mt-10"
                    />

                    <FormField
                        title="Username"
                        value={form.userName}
                        handleChangeText={(e)=>setForm({...form, userName:e})}
                        otherStyles="mt-7"
                        placeholder="Please enter a unique username"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    />

                    <FormField
                        title="Mobile Number"
                        value={form.mobileNum}
                        handleChangeText={(e)=>setForm({...form, mobileNum:e})}
                        otherStyles="mt-10"
                    />

                    <FormField
                        title="Street Name"
                        value={form.streetName}
                        handleChangeText={(e)=>setForm({...form, streetName:e})}
                        otherStyles="mt-10"
                    />

                    <FormField
                        title="City / Town"
                        value={form.city}
                        handleChangeText={(e)=>setForm({...form, city:e})}
                        otherStyles="mt-10"
                    />

                    <FormField
                        title="District"
                        value={form.district}
                        handleChangeText={(e)=>setForm({...form, district:e})}
                        otherStyles="mt-10"
                    />

                    <FormField
                        title="State"
                        value={form.state}
                        handleChangeText={(e)=>setForm({...form, state:e})}
                        otherStyles="mt-10"
                    />

                    <FormField
                        title="Pincode"
                        value={form.pincode}
                        handleChangeText={(e)=>setForm({...form, pincode:e})}
                        otherStyles="mt-10"
                    />

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e)=>setForm({...form, email:e})}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e)=>setForm({...form, password:e})}
                        otherStyles="mt-7"
                    />

                    <CustomButton
                        title={"Sign Up"}
                        handlePress={submit}
                        containerStyles={"mt-7"}
                        isLoading={isSubmitting}
                    />

                    <View className={"justify-center pt-5 flex-row gap-2 "}>
                        <Text className={"text-lg text-gray-100 font-pregular"}>
                            Already have an account?
                        </Text>
                        <Link href={"/sign-in"} className={"text-lg font-semibold text-secondary "}>Sign In</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;
