import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';

const { height } = Dimensions.get('window');

export default function Profile({navigation}) {
const clinicName = "Dental Clinic";
const distance = "2.4 km";
const rating = 4.5;

  return (
    
    <View style={styles.container}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
      {/* Top Half Map Placeholder */}
      <View style={styles.mapContainer}>
      <MapView
  style={StyleSheet.absoluteFillObject}
  initialRegion={{
    latitude: 42.6585,
    longitude: 21.1551,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }}
  provider="google"
>
  <Marker
    coordinate={{ latitude: 42.6585, longitude: 21.1551 }}
    title="QKUK"
    description="Spitali universitar kryesor në Prishtinë"
  />
</MapView>
</View>
<View style={styles.roundedEdge} />


      {/* Bottom Half Scrollable */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('MainMenu')}>
  <Ionicons name="arrow-back" size={24} color="#111827" />
</TouchableOpacity>
<ScrollView style={styles.bottomHalf} contentContainerStyle={styles.scrollContent}>
  {/* Info Header */}
  <View style={styles.headerRow}>
    <View style={styles.textInfo}>
      <Text style={styles.clinicName} numberOfLines={2}>
        {clinicName}
      </Text>
      <Text style={styles.distance}>{distance} larg</Text>

      <View style={styles.ratingContainer}>
        {[...Array(4)].map((_, i) => (
          <Ionicons key={i} name="star" size={16} color="#FBBF24" />
        ))}
        <Ionicons name="star-half" size={16} color="#FBBF24" />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
    </View>

    <TouchableOpacity style={styles.bookButton}>
      <Entypo name="plus" size={18} color="#fff" />
      <Text style={styles.bookText}>Rezervo</Text>
    </TouchableOpacity>
  </View>

  {/* Section Content */}
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Rreth Klinikës</Text>
    <Text style={styles.paragraph}>
      QKUK është institucioni më i madh shëndetësor në Kosovë dhe ofron shërbime të specializuara për të gjithë vendin.
      E vendosur në Prishtinë, klinika ofron kujdes të avancuar mjekësor me një staf akademik dhe profesional.
    </Text>
  </View>
</ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    mapContainer: {
        height: height * 0.45,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        overflow: 'hidden',
        backgroundColor: '#E5E7EB', // fallback behind map load
      },
      roundedEdge: {
        position: 'absolute',
        top: height * 0.45 - 8, // slightly overlaps the bottom of the map
        left: 0,
        right: 0,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        zIndex: 5,
      },
      
    container: {
      flex: 1,
      backgroundColor: '#F9FAFB',
    },
    topHalf: {
      height: height * 0.45,
      backgroundColor: '#E5E7EB',
      justifyContent: 'center',
      alignItems: 'center',
    },
    placeholderText: {
      color: '#9CA3AF',
      fontSize: 16,
      fontStyle: 'italic',
    },
    bottomHalf: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 36,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      },
      scrollContent: {
        paddingBottom: 50,
      },
      headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 10,
        marginBottom: 28,
      },
      textInfo: {
        flex: 1,
        paddingRight: 10,
      },
      clinicName: {
        fontSize: 22,
        fontWeight: '800',
        color: '#111827',
        lineHeight: 28,
      },
      distance: {
        fontSize: 14,
        color: '#6B7280',
        marginTop: 6,
      },
      ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
      },
      ratingText: {
        marginLeft: 6,
        fontSize: 14,
        color: '#374151',
        fontWeight: '600',
      },
      bookButton: {
        backgroundColor: '#3B82F6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 25,
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,
      },
      bookText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 6,
      },
      section: {
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        paddingTop: 20,
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 10,
      },
      paragraph: {
        fontSize: 15,
        color: '#374151',
        lineHeight: 22,
        textAlign: 'left',
      },      
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        padding: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
      },      
  });
  