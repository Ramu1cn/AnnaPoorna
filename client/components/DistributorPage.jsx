import { View, Text, ScrollView, Button, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts") // Replace with your backend URL
            .then(response => response.json())
            .then(json => {
                setData(json.slice(0, 10)); // Limiting data for demo
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const handleAccept = (id) => {
        Alert.alert("Accepted", `You accepted item ${id}`);
    };

    const handleReject = (id) => {
        Alert.alert("Rejected", `You rejected item ${id}`);
    };

    return (
        <View style={{ flex: 1, padding: 10 ,backgroundColor:"#1A1B4180"}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Profile</Text>
            <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10, height: 500 }}>
                <ScrollView>
                    {loading ? (
                        <Text>Loading...</Text>
                    ) : (
                        data.map(item => (
                            <View key={item.id} style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginBottom: 5, backgroundColor: '#f9f9f9' }}>
                                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                                <Text>{item.body}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                    <Button title="Accept" onPress={() => handleAccept(item.id)} />
                                    <Button title="Reject" color="red" onPress={() => handleReject(item.id)} />
                                </View>
                            </View>
                        ))
                    )}
                </ScrollView>
            </View>
        </View>
    );
};

export default Profile;