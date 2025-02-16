import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';


const ProfileCard = ({ title, value , style}) => {
    return (
        <TouchableOpacity className= {`rounded-2xl shadow-md   border-2 mt-2 bg-gray-400 h-[60px] w-[95%] items-center justify-center ml-3 ${style}`} >
            <Text className="text-xl font-semibold text-slate-200">{title}{`  `}:{`  `}{value}</Text>
        </TouchableOpacity>
    );
};

export default ProfileCard;