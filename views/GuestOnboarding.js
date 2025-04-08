import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';

const steps = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
];

export default function GuestOnboarding({ onFinish }) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onFinish();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      </View>

      <Animated.View
        key={currentStep}
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(500)}
        style={styles.textContainer}
      >
        <Text style={styles.stepText}>{steps[currentStep]}</Text>
      </Animated.View>

      <View style={styles.circleContainer}>
        {steps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.circle,
              currentStep === index ? styles.activeCircle : null,
            ]}
          />
        ))}
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={onFinish}>
          <Text style={styles.skipText}>
            Skip <AntDesign name="arrowright" size={16} color="#fff" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueButton} onPress={nextStep}>
          <Text style={styles.continueText}>
            {currentStep === steps.length - 1 ? 'Finish' : 'Continue'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  stepText: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 32,
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    marginHorizontal: 5,
    opacity: 0.7,
  },
  activeCircle: {
    backgroundColor: '#FFFFFF',
    opacity: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipButton: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  skipText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    opacity: 0.9,
  },
  continueButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
  },
  continueText: {
    color: '#007AFF',
    fontWeight: '700',
    fontSize: 16,
  },
});
