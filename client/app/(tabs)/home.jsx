import {View, Text} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import DashBoardCard from "../../components/DashBoardCard";

const Home = () => {
    return (
        <SafeAreaView className={"flex items-center justify-center bg-black-100 h-full fixed"}>
            <DashBoardCard bottomLeft={10} bottomRight={10} topLeft={10} topRight={10} />
        </SafeAreaView>
    )
}
export default Home
