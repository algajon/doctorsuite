import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar({ placeholder = "Search...", onChangeText }) {
  return (
    <View style={styles.searchBox}>
      <Ionicons name="search" size={18} color="#9CA3AF" style={{ marginRight: 8 }} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        onChangeText={onChangeText}
        style={styles.searchInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 6,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
  },
});
