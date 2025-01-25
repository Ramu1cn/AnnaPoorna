
import React from "react";
import {Image, ScrollView, Text, View} from "react-native";
import {Link, router} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from '../constants';
import CustomButton from "../components/CustomButton";

export default function App() {
    // @ts-ignore
    return (
    <SafeAreaView className={"bg-primary h-full"}>
        <ScrollView contentContainerStyle={{height:'100%'}}>
            <View className={"w-full mt-4 items-center min-h-[85vh] px-4"}>
                <Image
                    source={images.logo2}
                    className={"w-[200px] h-[130px]"}
                    resizeMode="contain"
                />

                <Image
                    source={images.cards}
                    className={" w-full h-[300px] rounded-full"}
                    resizeMode="cover"
                />

                <View className={"relative mt-5"}>
                    <Text className={"text-4xl text-white font-bold text-center"}>
                        Annadanam : Feed Hope, Spread Humanity with{' '}
                    </Text>
                    <Text className={"text-secondary-200 text-5xl mt-2 font-bold text-center"}>{'  '}Anna{'   '}Poorna</Text>
                    <Image
                        source={images.path}
                        className={"w-[136px] h-[15px] absolute -bottom-2 -right-2"}
                        resizeMode={"contain"}
                    />
                </View>

                <Text className={"text-sm font-pregular text-gray-100 mt-7 text-center"}>Loka
                    Samastaḥ, Sukhino Bhavantu – Let All Be Nourished and Happy.</Text>
                <Link href={"/home"} className={"text-gray-100 font-pbold text-center text-3xl"}>Home</Link>

                <CustomButton
                title={"Continue with Email"}
                handlePress = {()=> router.push('/sign-in')}
                containerStyles={"w-full mt-7"}
                />
            </View>
        </ScrollView>
        <StatusBar backgroundColor={"#161622"} style={"light"} />

    </SafeAreaView>
  );
}
