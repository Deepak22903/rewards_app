// --- FILE: components/PageHeader.js ---
// Create this file in the `components` directory.

import { Feather } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PageHeader = ({ title, onBack }) => (
  <SafeAreaView style={{backgroundColor: '#FCEEDB'}}>
    <View style={headerStyles.container}>
      <TouchableOpacity onPress={onBack} style={headerStyles.backButton}>
        <Feather name="chevron-left" size={28} color="#6B4F3A" />
      </TouchableOpacity>
      <Text style={headerStyles.title}>{title}</Text>
    </View>
  </SafeAreaView>
);
export default PageHeader;

const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 16, backgroundColor: '#FCEEDB', borderBottomWidth: 1, borderBottomColor: '#E0D3B5'
    },
    backButton: {
        position: 'absolute', left: 16, top: 12, bottom: 0, justifyContent: 'center'
    },
    title: {
        fontSize: 20, fontWeight: 'bold', color: '#6B4F3A',
    }
});