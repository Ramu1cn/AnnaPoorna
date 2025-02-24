import { View, Text, ScrollView, Button, Alert, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Distribute = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const userName = "Sunny"; // Replace with dynamic username if needed

    useEffect(() => {
        axios.get(`http://10.25.85.160:8080/Donation/donor/${userName}`)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    const handleAccept = (id) => {
        Alert.alert("Accepted", `You accepted donation ID: ${id}`);
    };

    const handleReject = (id) => {
        Alert.alert("Rejected", `You rejected donation ID: ${id}`);
    };

    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: "#1A1B4180" }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: 'white' }}>Distribute</Text>
            <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 10, height: 500 }}>
                <ScrollView>
                    {loading ? (
                        <Text style={{ color: 'white' }}>Loading...</Text>
                    ) : (
                        data.map(item => (
                            <View key={item.donation_id} style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginBottom: 5, backgroundColor: '#f9f9f9' }}>
                                <Text style={{ fontWeight: 'bold' }}>Address: {item.address}</Text>
                                <Text>Place: {item.place}</Text>
                                <Text>Food Prep Time: {item.foodPrepTime}</Text>
                                <Text>Quantity: {item.quantity} kg</Text>
                                {item.image && <Image source={{ uri: item.image }} style={{ width: 100, height: 100, marginTop: 5, borderRadius: 8 }} />}
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                    <Button title="Accept" onPress={() => handleAccept(item.donation_id)} />
                                    <Button title="Reject" color="red" onPress={() => handleReject(item.donation_id)} />
                                </View>
                            </View>
                        ))
                    )}
                </ScrollView>
            </View>
        </View>
    );
};

export default Distribute;
