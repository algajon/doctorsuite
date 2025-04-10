import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const defaultItems = [
  {  icon: 'flask-outline' },
  {  icon: 'calendar-outline' },
  {  icon: 'medkit-outline' },
  {  icon: 'person-circle-outline' },
];

export default function DashboardGrid({ items = defaultItems, onItemPress }) {
  return (
    <View style={styles.grid}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => onItemPress?.(item)}
        >
          <Ionicons name={item.icon} size={42} color="#3B82F6" />
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 14,
    marginBottom: 0,
  },
  card: {
    width: '47%',
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    marginTop: 20,
    fontSize: 1,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
  },
});
