import {View, Text, ScrollView, Image, Alert} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import {Link, router} from "expo-router";

const SignUp = () => {
    const [form, setForm] = useState(
        {
            fullname:"",
            username: "",
            mobilenumber:"",
            street:"",
            city:"",
            district:"",
            state:"",
            pincode:"",
            type:"",
            email:'',
            password:'',
        }
    );

    const [isSubmitting, setIsSubmitting] = useState(false);


    const submit = ()=>{

        if(!form.username || !form.fullname || !form.password || !form.city
            || !form.district || !form.street || !form.mobilenumber || !form.state || !form.pincode ||
        !form.type || !form.email || !form.password){

            Alert.alert("Error","Please fill all the fields.");
        }

        setIsSubmitting(true);

        try{
            // logic for api call to the backend

            // set it to global state
            router.replace("/home");
        }catch(error){
            Alert.alert("Error",error.message);
        }finally{
            setIsSubmitting(false);
        }
    }
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
                        value={form.fullname}
                        handleChangeText={(e)=>setForm({...form, fullname:e})}
                        otherStyles="mt-10"
                    />

                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={(e)=>setForm({...form, username:e})}
                        otherStyles="mt-7"
                    />

                    <FormField
                        title="Mobile Number"
                        value={form.mobilenumber}
                        handleChangeText={(e)=>setForm({...form, mobilenumber:e})}
                        otherStyles="mt-10"
                    />

                    <FormField
                        title="Street No./Street Name"
                        value={form.street}
                        handleChangeText={(e)=>setForm({...form, street:e})}
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
                        title="Type"
                        value={form.type}
                        handleChangeText={(e)=>setForm({...form, type:e})}
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
    )
}
export default SignUp
