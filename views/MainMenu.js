import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const tabs = [
  { label: 'Home', icon: 'home-outline' },
  { label: 'Appointments', icon: 'calendar-outline' },
  { label: 'Messages', icon: 'chatbubble-outline' },
  { label: 'Profile', icon: 'person-outline' },
];

export default function MainMenu({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <LinearGradient
          colors={['#6EE7B7', '#67E8F9', '#3B82F6']}
          style={styles.gradientLine}
        />
        <Text style={styles.title}>{activeTab}</Text>
        <Text style={styles.subtitle}>This is the {activeTab} section. (Content coming soon!)</Text>
      </View>

      {/* Spacer / Future content */}
      <View style={{ flex: 1 }} />

      {/* Sticky Bottom Nav */}
      <View style={styles.navBar}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.label;
          return (
            <TouchableOpacity
              key={tab.label}
              style={styles.navItem}
              onPress={() => {
                setActiveTab(tab.label);
                if (tab.label === 'Profile') {
                  onNavigate('profile');
                }
              }}
                          >
              <Ionicons
              name={tab.icon}
              size={22}
              color={isActive ? '#2563EB' : '#000000'}
              />
              <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  headerContainer: {
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  gradientLine: {
    width: '100%',
    height: 5,
    borderRadius: 0,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: 1.2,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 10,
  },
  navBarWrapper: {
    width: '100%',
    backgroundColor: '#E5E7EB',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 12,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
    borderRadius: 16,
    overflow: 'hidden',
  },
  navItem: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  activeTab: {
    backgroundColor: '#2563EB',
  },
  navLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000', // default black
    marginTop: 4,
  },
  navLabelActive: {
    color: '#2563EB',
  },
  
  tabWithBorder: {
    borderRightWidth: 0.5,
    borderRightColor: '#D1D5DB',
  },
});
