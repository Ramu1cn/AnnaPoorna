import React, { useEffect, useState } from 'react';
import {View, Text, TextInput, ScrollView, Button, SafeAreaView, Image} from 'react-native';
import ProfileCard from "../../components/ProfileCard";
import {images} from "../../constants";
import CustomButton from "../../components/CustomButton";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

const Profile = () => {
    const [profile, setProfile] = useState({
        donor_id: null,
        fullName: '',
        userName: '',
        mobileNum: null,
        streetName: '',
        city: '',
        district: '',
        state: '',
        pincode: null,
        email: '',
        password: '',
        loginType: '',
    });
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const email = await AsyncStorage.getItem('email');
                console.log(email);
                const response = await axios.get(`http://10.25.73.87:8080/Donor/email/${email}`);
                setProfile(response.data);
                await asyncStorage.setItem('type', profile.loginType);
                console.log(response.data);

            } catch (err) {
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, []);


    return (
        <SafeAreaView className={"w-full bg-black-200 h-full items-center justify-center mt-10"}>
            <View className={"w-full  h-[50px] mt-2 flex items-center justify-center"}>
                <Text className={" text-4xl text-secondary font-pbold"}> Profile </Text>
            </View>
            <View className={"w-[98%] h-[160px] bg-gray-600 rounded-2xl shadow-md p-4 mt-0 flex flex-row items-center text-4xl border border-gray-200 gap-[50px]"}>
                <Image source={images.profile_photo} className={"flex rounded-full h-[80px] w-[80px] items-center justify-center mt-6"} resizeMode={"contain"}/>
                <View className={"text-white  mt-6 border-0 font-bold h-[100px] w-[250px] flex items-start justify-center"}>
                    <Text className={"text-2xl text-slate-200"}>Name : {profile.fullName}</Text>
                    <Text className={"text-2xl text-slate-200"}>Contact No : {profile.mobileNum}</Text>
                    <Text className={"text-2xl text-slate-200"}>E-mail : {profile.email}</Text>
                </View>
            </View>
            {/*<View className={"w-full h-[60%] flex items-center justify-center"}>*/}
            <ScrollView className="w-full max-h-full mb-6">

                <ProfileCard title={"User Name"} value={profile.userName} style={"mt-2"}/>
                <ProfileCard title={"Street Name"} value={profile.streetName} style={"mt-2"}/>
                <ProfileCard title={" City  "} value={profile.city} style={"mt-2"}/>
                <ProfileCard title={"District"} value={profile.district} style={"mt-2"}/>
                <ProfileCard title={"State"} value={profile.state} style={"mt-2"}/>
                <ProfileCard title={"Pin Code"} value={profile.pincode} style={"mt-2"}/>
                <ProfileCard title={"Type"} value={profile.loginType} style={"mt-2"}/>
                <ProfileCard title={"Password"} value={profile.password} style={"mt-2"}/>

             </ScrollView >
            {/*</View>*/}

        </SafeAreaView>
    );
};

export default Profile;


