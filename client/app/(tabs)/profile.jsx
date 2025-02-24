import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Image } from 'react-native';
import ProfileCard from "../../components/ProfileCard";
import { images } from "../../constants";
import axios from "axios";

const Profile = () => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await axios.get("http://10.25.85.160:8080/Donor/Sunny");
                setProfile(response.data);
            } catch (err) {
                console.log("Error fetching profile:", err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, []);

    return (
        <SafeAreaView className={"w-full bg-black-200 h-full items-center justify-center mt-10"}>
            <View className={"w-full h-[50px] mt-2 flex items-center justify-center"}>
                <Text className={"text-4xl text-secondary font-pbold"}> Profile </Text>
            </View>
            <View className={"w-[98%] h-[160px] bg-gray-600 rounded-2xl shadow-md p-4 mt-0 flex flex-row items-center border border-gray-200 gap-[50px]"}>
                <Image source={images.profile_photo} className={"rounded-full h-[80px] w-[80px]"} resizeMode={"contain"}/>
                <View className={"text-white mt-6 border-0 font-bold h-[100px] w-[250px] flex items-start justify-center"}>
                    {profile.fullName && <Text className={"text-2xl text-slate-200"}>Name : {profile.fullName}</Text>}
                    {profile.mobileNum && <Text className={"text-2xl text-slate-200"}>Contact No : {profile.mobileNum}</Text>}
                    {profile.email && <Text className={"text-2xl text-slate-200"}>E-mail : {profile.email}</Text>}
                </View>
            </View>
            <ScrollView className="w-full max-h-full mb-6">
                {profile.userName && <ProfileCard title={"User Name"} value={profile.userName} style={"mt-2"}/>}
                {profile.city && <ProfileCard title={"City"} value={profile.city} style={"mt-2"}/>}
                {profile.state && <ProfileCard title={"State"} value={profile.state} style={"mt-2"}/>}
                {profile.pincode && <ProfileCard title={"Pin Code"} value={profile.pincode} style={"mt-2"}/>}
                {profile.loginType && <ProfileCard title={"Type"} value={profile.loginType} style={"mt-2"}/>}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
