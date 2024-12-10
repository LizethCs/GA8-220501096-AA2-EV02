import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HotelCard = ({ hotel }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{hotel.name}</Text>
      <Text style={styles.address}>{hotel.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
});

export default HotelCard;


