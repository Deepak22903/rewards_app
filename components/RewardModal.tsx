// --- FILE: components/RewardModal.js ---
// Create this file in the `components` directory.

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Clipboard from '@react-native-clipboard/clipboard';
import { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const RewardModal = ({ reward, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    Clipboard.setString(reward.link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClaim = () => {
    Alert.alert('Claim Reward', `This would open the link: ${reward.link}`);
    onClose();
  };

  return (
    <Modal transparent={true} visible={true} animationType="fade" onRequestClose={onClose}>
      <Pressable style={modalStyles.overlay} onPress={onClose}>
        <Pressable style={modalStyles.container}>
          <Text style={modalStyles.title}>REWARD</Text>
          <View style={modalStyles.rewardInfo}>
            <MaterialCommunityIcons name="power" size={32} color="#FFC107" />
            <Text style={modalStyles.rewardText}>{reward.amount} {reward.type}</Text>
          </View>
          <View>
            <Text style={modalStyles.linkLabel}>Reward link</Text>
            <View style={modalStyles.inputContainer}>
              <TextInput value={reward.link} editable={false} style={modalStyles.input} />
              <TouchableOpacity onPress={handleCopy} style={modalStyles.copyIcon}>
                <Feather name="copy" size={20} color="#6B4F3A" />
              </TouchableOpacity>
            </View>
            <Text style={modalStyles.copyFeedback}>
              {copied ? 'Link copied to clipboard!' : 'Copy the link and share it with your friends!'}
            </Text>
          </View>
          <View style={modalStyles.buttonRow}>
            <TouchableOpacity style={[modalStyles.button, modalStyles.closeButton]} onPress={onClose}>
              <Text style={[modalStyles.buttonText, modalStyles.closeButtonText]}>CLOSE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[modalStyles.button, modalStyles.claimButton]} onPress={handleClaim}>
              <Text style={[modalStyles.buttonText, modalStyles.claimButtonText]}>CLAIM</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};
export default RewardModal;

const modalStyles = StyleSheet.create({
    overlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center', padding: 24 },
    container: { backgroundColor: 'white', borderRadius: 16, padding: 24, width: '100%', maxWidth: 400, gap: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 },
    title: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#333' },
    rewardInfo: { alignItems: 'center', gap: 8 },
    rewardText: { fontSize: 24, fontWeight: 'bold', color: '#333' },
    linkLabel: { fontSize: 14, color: '#666', marginBottom: 4 },
    inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F0F0', borderRadius: 8, borderWidth: 1, borderColor: '#E0E0E0' },
    input: { flex: 1, padding: 12, color: '#333', fontSize: 16 },
    copyIcon: { padding: 12 },
    copyFeedback: { textAlign: 'center', fontSize: 14, color: '#666', marginTop: 8 },
    buttonRow: { flexDirection: 'row', gap: 12, marginTop: 8 },
    button: { flex: 1, paddingVertical: 14, borderRadius: 8, alignItems: 'center' },
    closeButton: { backgroundColor: '#E0E0E0' },
    claimButton: { backgroundColor: '#4CAF50' },
    buttonText: { fontSize: 16, fontWeight: 'bold' },
    closeButtonText: { color: '#333' },
    claimButtonText: { color: 'white' },
});

