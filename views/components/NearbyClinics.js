import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = 140;

const sampleClinics = [
  {
    name: 'QKUK',
    distance: '2.4 km',
    image: 'https://via.placeholder.com/140x100?text=QKUK',
  },
  {
    name: 'Family Clinic',
    distance: '1.1 km',
    image: 'https://via.placeholder.com/140x100?text=Family',
  },
  {
    name: 'Dermaklinika',
    distance: '1.9 km',
    image: 'https://via.placeholder.com/140x100?text=Dermaklinika',
  },
  {
    name: 'Peja Health',
    distance: '76 km',
    image: 'https://via.placeholder.com/140x100?text=Peja',
  },
  {
    name: 'Gjakova Hospital',
    distance: '86 km',
    image: 'https://via.placeholder.com/140x100?text=Gjakova',
  },
];

export default function HorizontalClinicRow({ title = 'Nearby Clinics', data = sampleClinics }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.distance}>{item.distance}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  list: {
    paddingLeft: 10,
  },
  card: {
    width: CARD_WIDTH,
    marginRight: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 100,
    backgroundColor: '#E5E7EB',
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
  },
  distance: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
});
