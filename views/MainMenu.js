import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function MainMenu() {
  const buttons = ['Home', 'Appointments', 'Messages', 'Profile'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient
          colors={['#6EE7B7', '#67E8F9', '#3B82F6']}
          style={styles.gradientLine}
        />
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.subtitle}>
          Welcome back! Explore your personalized healthcare dashboard.
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        {buttons.map((btn, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuButton}
            activeOpacity={0.6}
            onPress={() => {
              // Placeholder for future navigation actions
              console.log(`${btn} pressed`);
            }}
          >
            <Text style={styles.menuButtonText}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 25,
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  headerContainer: {
    marginTop: 20,
  },
  gradientLine: {
    width: width * 0.25,
    height: 4,
    borderRadius: 2,
    marginBottom: 15,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: 1.2,
  },
  subtitle: {
    fontSize: 17,
    color: '#6B7280',
    lineHeight: 24,
    marginTop: 10,
  },
  bottomContainer: {
    paddingBottom: 30,
  },
  menuButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#3B82F6',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  menuButtonText: {
    color: '#3B82F6',
    fontWeight: '700',
    fontSize: 16,
  },
});
