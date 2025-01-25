import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert , SafeAreaView} from 'react-native';

const Report = () => {
    const [problemText, setProblemText] = useState('');
    const [questionText, setQuestionText] = useState('');

    const handleAskQuestion = () => {
        if (questionText.trim() === '') {
            Alert.alert('Error', 'Please describe the Question.');
            return;
        }
        Alert.alert('Ask a Question', 'Your Question will be answered via Mail. Thank you.');
        console.log(questionText);
        setQuestionText("");
    };

    const handleReportProblem = () => {
        if (problemText.trim() === '') {
            Alert.alert('Error', 'Please describe the problem.');
            return;
        }
        Alert.alert('Report Submitted', 'Thank you for your feedback.');
        setProblemText('');
    };

    const handleDeleteAccount = () => {
        Alert.alert('Delete Account', 'This action is irreversible. Are you sure?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Confirm', onPress: () => Alert.alert('Account Deleted', 'Your account has been deleted.') },
        ]);
    };

    return (
        <SafeAreaView className="flex-1 p-4 bg-black-200 text-gray-100 h-full">
            <View className="bg-gray-600 p-4 rounded-2xl shadow-md mb-4 mt-14">
                <Text className="text-lg font-semibold mb-2">Write Your Question ?</Text>
                <TextInput
                    className="border border-gray-300 rounded-lg p-2 text-base h-[150px]"
                    placeholder="Describe your questions?"
                    multiline
                    value={questionText}
                    onChangeText={setQuestionText}
                />
            </View>
            <TouchableOpacity
                onPress={handleAskQuestion}
                className="bg-blue-500 p-4 rounded-2xl mb-4"
            >
                <Text className="text-white text-center text-lg">Ask a Question</Text>
            </TouchableOpacity>

            <View className="bg-gray-600 p-4 rounded-2xl shadow-md mb-4">
                <Text className="text-lg font-semibold mb-2">Report a Problem</Text>
                <TextInput
                    className="border border-gray-300 rounded-lg p-2 text-base h-[150px]"
                    placeholder="Describe your problem..."
                    multiline
                    value={problemText}
                    onChangeText={setProblemText}
                />
                <TouchableOpacity
                    onPress={handleReportProblem}
                    className="bg-gray-800 p-3 rounded-xl mt-4"
                >
                    <Text className="text-white text-center text-base">Submit Problem</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={handleDeleteAccount}
                className=" bg-red-500 p-6 rounded-2xl mt-[54px]"
            >
                <Text className="text-white text-center text-lg">Delete Account</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Report;