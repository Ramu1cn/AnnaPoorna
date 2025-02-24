import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2" style={{ marginTop: 20 }}>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-8 h-8"
                style={{ marginTop: 10 }}
            />
            <Text
                className={`text-sm ${focused ? 'font-semibold' : 'font-regular'} w-11 text-center`}
                style={{ color: color }}
            >
                {name === 'Home' ? 'Home' : name}
            </Text>
        </View>
    );
};

const TabsLayout = () => {
    return (
        <View style={{ flex: 1 }}>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FFA001',
                    tabBarInactiveTintColor: '#CDCDE0',
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopWidth: 2,
                        borderTopColor: '#232533',
                        height: 105,
                        paddingBottom: 10,
                    },
                    keyboardHidesTabBar: true,
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.home} color={color} focused={focused} name="Home" />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="donate"
                    options={{
                        title: 'Donate',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.plus} color={color} focused={focused} name="Donate" />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="distribute"
                    options={{
                        title: 'Distribute',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.upload} color={color} focused={focused} name="Distribute" />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.profile} color={color} focused={focused} name="Profile" />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="report"
                    options={{
                        title: 'Report',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon icon={icons.report} color={color} focused={focused} name="Report" />
                        ),
                    }}
                />

            </Tabs>
        </View>
    );
};

export default TabsLayout;