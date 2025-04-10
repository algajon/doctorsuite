import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function AccentLine() {
  return (
    <LinearGradient
      colors={['#6EE7B7', '#67E8F9', '#3B82F6']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientLine}
    />
  );
}

const styles = StyleSheet.create({
  gradientLine: {
    width: width * 0.25,
    height: 4,
    borderRadius: 2,
    marginBottom: 16,
  },
});
