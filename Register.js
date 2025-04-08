import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function Register({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    // Simple validation placeholder
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Add your registration logic here, then navigate:
    navigation.navigate('MainMenu');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient
          colors={['#6EE7B7', '#67E8F9', '#3B82F6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientLine}
        />
        <Text style={styles.title}>DoctorSuite</Text>
        <Text style={styles.subtitle}>
          Create your account to experience personalized healthcare.
        </Text>
      </View>

      <ScrollView style={styles.formContainer}>
        <TextInput
          placeholder="First Name"
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Last Name"
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          placeholder="Date of Birth (YYYY-MM-DD)"
          style={styles.input}
          value={dob}
          onChangeText={setDob}
        />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TextInput
          placeholder="Phone Number (+1234567890)"
          keyboardType="phone-pad"
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <TouchableOpacity style={styles.signupButton} onPress={handleRegister}>
          <Text style={styles.signupText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.loginPrompt}>
            Already have an account? <Text style={styles.loginLink}>Log in</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 25,
    paddingVertical: 75,
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 10,
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
    lineHeight: 24,
    textAlign: 'left',
    maxWidth: '90%',
  },
  formContainer: {
    flex: 1,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 12,
    color: '#333',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  signupButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#3B82F6',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  signupText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  loginPrompt: {
    textAlign: 'center',
    marginTop: 15,
    color: '#6B7280',
    fontSize: 15,
  },
  loginLink: {
    color: '#3B82F6',
    fontWeight: '700',
  },
});
