import { View, Text, ScrollView, Button, Alert, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Distribute = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const userName = "Sunny"; // Replace with dynamic username if needed

    const fetchData = () => {
        setLoading(true);
        axios.get(`http://10.25.85.160:8080/Donation/donor/${userName}`)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAccept = (id) => {
        Alert.alert("Accepted", "You accepted the donation");
        setData(prevData => prevData.filter(item => item.donation_id !== id));
    };

    const handleReject = (id) => {
        Alert.alert("Rejected", "You rejected the donation");
        setData(prevData => prevData.filter(item => item.donation_id !== id));
    };

    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: "#1A1B4180" }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'white', textAlign: 'center' }}>Distribute</Text>
            <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10, height: 500, backgroundColor: '#2A2B5F80' }}>
                <ScrollView>
                    {loading ? (
                        <Text style={{ color: 'white', textAlign: 'center' }}>Loading...</Text>
                    ) : (
                        data.map(item => (
                            <View key={item.donation_id} style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginBottom: 5, backgroundColor: '#3A3B6F' }}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>Address: {item.address}</Text>
                                <Text style={{ color: 'white' }}>Place: {item.place}</Text>
                                <Text style={{ color: 'white' }}>Food Prep Time: {item.foodPrepTime}</Text>
                                <Text style={{ color: 'white' }}>Quantity: {item.quantity} kg</Text>
                                {item.image && <Image source={{ uri: item.image }} style={{ width: 100, height: 100, marginTop: 5, borderRadius: 8, alignSelf: 'center' }} />}
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                    <TouchableOpacity onPress={() => handleAccept(item.donation_id)} style={{ backgroundColor: '#4CAF50', padding: 10, borderRadius: 5, flex: 1, marginRight: 5 }}>
                                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Accept</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleReject(item.donation_id)} style={{ backgroundColor: '#F44336', padding: 10, borderRadius: 5, flex: 1, marginLeft: 5 }}>
                                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Reject</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    )}
                </ScrollView>
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <TouchableOpacity onPress={fetchData} style={{ backgroundColor: '#007BFF', padding: 10, borderRadius: 5, width: '50%' }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Refresh</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Distribute;
