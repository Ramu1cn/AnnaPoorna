import {View, Text, Image} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import {Tabs} from "expo-router";
import {icons} from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";



const TabIcon = ({icon,color,name,focused}) =>{
    return(
        <View className={"items-center justify-center gap-2"}>
            <Image
                source={icon}
                resizeMode={"contain"}
                tintColor={color}
                className={"w-67 h-8"}
            />
            <Text className={`${focused} ? 'font-psemibold' : 'font-pregular' text-xs w-11`} style={{color:color}}>
                {name === "Home"? `${"  "}Home`:name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarStyle: {
                        backgroundColor: "#161622",
                        borderTopWidth: 0, // to keep border between screen and tab menu
                        borderTopColor: "#232533",
                        height: 80,
                    },
                    keyboardHidesTabBar: true,

                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: `${"  "}Home`,
                        headerShown: false,
                        tabBarIcon: ({color, focused,}) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                focused={focused}
                                name={"Home"}
                            />

                        )


                    }}
                />
                <Tabs.Screen
                    name= 'donate'
                    options={{
                        title: 'Donate',
                        headerShown: false,
                        tabBarIcon: ({color, focused,}) => (
                            <TabIcon
                                icon={icons.plus}
                                color={color}
                                focused={focused}
                                name={'Donate'}
                            />
                        )

                }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({color, focused,}) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                focused={focused}
                                name={"Profile"}
                            />

                        )


                    }}
                />

                <Tabs.Screen
                    name="report"
                    options={{
                        title: 'Report',
                        headerShown: false,
                        tabBarIcon: ({color, focused,}) => (
                            <TabIcon
                                icon={icons.report}
                                color={color}
                                focused={focused}
                                name={"Report"}
                            />

                        )


                    }}
                />

                <Tabs.Screen
                    name="distribute"
                    options={{
                        title: 'Distribute',
                        headerShown: false,
                        tabBarIcon: ({color, focused,}) => (
                            <TabIcon
                                icon={icons.upload}
                                color={color}
                                focused={focused}
                                name={"Ticket"}
                            />

                        )


                    }}
                />
            </Tabs>
        </>
    )
}
export default TabsLayout
