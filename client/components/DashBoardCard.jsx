import React, { useState } from "react";
import {View, Text, StyleSheet, SafeAreaView, Image} from "react-native";
import {images} from "../constants";

const DashBoardCard = ({ topLeft, topRight, bottomLeft, bottomRight }) => {
    const [fields, setFields] = useState({
        topLeft: topLeft || "",
        topRight: topRight || "",
        bottomLeft: bottomLeft || "",
        bottomRight: bottomRight || "",
    });

    const updateField = (field, value) => {
        setFields((prevFields) => ({
            ...prevFields,
            [field]: value,
        }));
    };


    return (
        <SafeAreaView className="p-4 bg-gray-400 rounded-2xl shadow-md w-[95%] mt-10 h-[180px]">
            <View className="flex-row justify-between">
                {/* Top Left Field */}
                <View>
                    <Text className={"text-2xl font-pbold text-slate-200"}>Donations</Text>
                    <Text className="text-lg font-medium text-white font-psemibold">{fields.topLeft}</Text>
                </View>
                {/* Top Right Field */}
                <View>
                    <Text className={"text-2xl font-pbold text-slate-200 ml-12"}>Rank</Text>
                    <View className={"flex-row justify-between gap-2"}>
                        <Image source={images.rank_badge} className={"w-10 h-10 mt-2 ml-10 rounded-2xl"} resizeMode={"contain"} />
                        <Text className="text-3xl font-medium text-white font-psemibold mt-3 mr-5">{fields.topRight}</Text>
                    </View>
                </View>
            </View>

            <View className="flex-row justify-between mt-4">
                {/* Bottom Left Field */}
                <Text className="text-lg font-medium text-white font-psemibold">{fields.bottomLeft}</Text>

                {/* Bottom Right Field */}
                <Text className="text-lg font-medium text-white font-psemibold">{fields.bottomRight}</Text>
            </View>
        </SafeAreaView>
    );
};

export default DashBoardCard;