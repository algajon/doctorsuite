import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

export default function GuestLanding({ onContinueAsGuest, onLogin, onSignUp }) {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="light" translucent backgroundColor="transparent" />

      <View style={styles.headerContainer}>
        <LinearGradient
          colors={['#6EE7B7', '#67E8F9', '#3B82F6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientLine}
        />
        <Text style={styles.title}>DoctorSuite</Text>
        <Text style={styles.subtitle}>
          Experience healthcare reimagined—seamless, smart, and personalized for you.
        </Text>

        <TouchableOpacity style={styles.guestButton} onPress={onContinueAsGuest}>
          <Text style={styles.guestButtonText}>Explore as Guest</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton} onPress={onSignUp}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // Light background for a professional look
    paddingHorizontal: 25,
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Text aligned to the left
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
    marginBottom: 12,
    letterSpacing: 1.2,
  },
  subtitle: {
    fontSize: 17,
    color: '#6B7280',
    marginBottom: 25,
    lineHeight: 24,
    textAlign: 'left',
    maxWidth: '90%',
  },
  guestButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: '#3B82F6',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  guestButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  bottomContainer: {
    paddingBottom: 20,
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#6EE7B7',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  loginText: {
    color: '#10B981',
    fontWeight: '700',
    fontSize: 16,
  },
  signupButton: {
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#67E8F9',
  },
  signupText: {
    color: '#0284C7',
    fontWeight: '700',
    fontSize: 16,
  },
});
