// This is your Home Screen.

import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StyledButton from '../components/StyledButton'; // We'll create this component

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={homeStyles.container}>
      <TouchableOpacity onPress={() => router.push('/settings')} style={homeStyles.settingsIcon}>
        <Feather name="settings" size={32} color="#6B4F3A" />
      </TouchableOpacity>
      
      <View style={homeStyles.header}>
        <Text style={homeStyles.title}>Travel Rewards</Text>
        <View style={homeStyles.buttonContainer}>
          <StyledButton onPress={() => router.push('/rewards')}>
            <MaterialCommunityIcons name="power" size={22} color="#FFC107" />
            <Text style={styledButtonStyles.text}>Rewards</Text>
          </StyledButton>
          <StyledButton disabled={true} style={homeStyles.disabledButton}>
            <Feather name="lock" size={20} color="#8C7B65" />
            <Text style={[styledButtonStyles.text, {color: '#8C7B65'}]}>News (Soon)</Text>
          </StyledButton>
        </View>
      </View>
      
      <View style={homeStyles.footer}>
        <StyledButton onPress={() => Alert.alert('Share', 'Share functionality not implemented.')}>
           <Feather name="share-2" size={20} color="#4CAF50" />
           <Text style={styledButtonStyles.text}>Share</Text>
        </StyledButton>
        <StyledButton onPress={() => Alert.alert('Rate', 'Rate functionality not implemented.')}>
           <FontAwesome name="star" size={20} color="#2196F3" />
           <Text style={styledButtonStyles.text}>Rate</Text>
        </StyledButton>
      </View>
    </View>
  );
};

export default HomeScreen;

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: 64,
        backgroundColor: '#FEF7E9',
    },
    settingsIcon: {
        position: 'absolute',
        top: 60,
        right: 24,
        zIndex: 1,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: '800',
        color: '#F2C23B',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 4,
        marginBottom: 48,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        maxWidth: 350,
        gap: 16,
    },
    disabledButton: {
      backgroundColor: '#EBE3D3',
      borderColor: '#D4C8B0',
    },
    footer: {
        flexDirection: 'row',
        gap: 16,
        paddingTop: 32,
    }
});

// Note: We'll define styledButtonStyles in the component file.
const styledButtonStyles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#495057',
    }
});