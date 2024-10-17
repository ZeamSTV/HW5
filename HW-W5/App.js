import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const App = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.7:3000/rooms')
      .then(response => {
        setRooms(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const renderRoom = ({ item }) => (
    <View style={styles.roomContainer}>
      <Image source={{ uri: item.image }} style={styles.roomImage} />
      <View style={styles.roomDetails}>
        <Text style={styles.roomName}>{item.name}</Text>
        <Text style={styles.roomDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    
    <View style={styles.container}>
      <Ionicons 
      style={styles.iconHeader}
       name='home-outline' 
       size={100}
       color="orange"
       />
      <Text style={styles.title}>Smart Home</Text>
      <Text style={styles.subtitle}>List Rooms</Text>
      <FlatList
        data={rooms}
        renderItem={renderRoom}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d1d',
    padding: 10,
    
  },
  iconHeader:{
    padding:20,
    textAlign:'center',
  },
  title: {
    fontSize: 30,
    color: '#ffb700',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  roomContainer: {
    flexDirection: 'row',
    backgroundColor: '#333',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  roomImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  roomDetails: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  roomName: {
    fontSize: 18,
    color: '#fff',
  },
  roomDescription: {
    fontSize: 14,
    color: '#ccc',
  },
});

export default App;