import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import AccentLine from './components/AccentLine';

export default function Login({ onLogin, onNavigateToRegister }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="transparent" />

      <KeyboardAvoidingView
        style={styles.inner}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Welcome Text */}
        <View style={{ marginTop: 20 }}>
  <AccentLine />
  <Text style={styles.title}>You think I fucking care?</Text>
</View>

        {/* Inputs */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#A1A1AA"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#A1A1AA"
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
        </View>

        {/* Social Login */}
        <View style={styles.social}>
          <Text style={styles.orText}>or continue with</Text>

          <View style={styles.iconRow}>
            <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Google')}>
              <AntDesign name="google" size={20} color="#EA4335" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Outlook')}>
              <Ionicons name="mail-outline" size={20} color="#2563EB" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <TouchableOpacity style={styles.signupLink} onPress={onNavigateToRegister}>
          <Text style={styles.signupText}>
            Don't have an account? <Text style={styles.signupHighlight}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 20,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 100,
  },
  header: {
    alignItems: 'left',
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  form: {
    marginTop: 30,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#111827',
    marginBottom: 18,
    borderWidth: 1.2,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 3,
  },
  loginButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  social: {
    alignItems: 'center',
    marginTop: 28,
  },
  orText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  iconRow: {
    flexDirection: 'row',
    gap: 18,
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.2,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 4,
  },
  signupLink: {
    alignItems: 'center',
    marginTop: 30,
  },
  signupText: {
    color: '#6B7280',
    fontSize: 14,
  },
  signupHighlight: {
    color: '#0284C7',
    fontWeight: '700',
  },
});
