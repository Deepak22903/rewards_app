// --- FILE: components/StyledButton.js ---
// Create this file in the `components` directory.

import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const StyledButton = ({ children, onPress, disabled = false, style = {} }) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[styledButtonStyles.button, disabled && styledButtonStyles.disabled, style]}
    activeOpacity={0.7}
  >
    {children}
  </TouchableOpacity>
);
export default StyledButton;

export const styledButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: 'white', borderWidth: 1, borderColor: '#E0D3B5', borderRadius: 12, paddingVertical: 16, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, flex: 1,
    },
    disabled: {
        backgroundColor: '#EBE3D3', borderColor: '#D4C8B0', elevation: 0,
    },
    text: {
        fontSize: 18, fontWeight: '600', color: '#495057',
    }
});