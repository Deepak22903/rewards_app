// Create this new file for the Rewards Screen.

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CalendarIcon from '../components/CalendarIcon';
import PageHeader from '../components/PageHeader';
import RewardModal from '../components/RewardModal';

// --- Mock Data ---
const rewardsByDate = [
  {
    date: 'July 1',
    rewards: [
      { id: 1, type: 'Energy', amount: 10, link: 'https://travel-rewards.app/rewards/99dd8819' },
      { id: 2, type: 'Energy', amount: 15, link: 'https://travel-rewards.app/rewards/a1b2c3d4' },
    ],
  },
  {
    date: 'June 30',
    rewards: [
      { id: 5, type: 'Energy', amount: 10, link: 'https://travel-rewards.app/rewards/m3n4o5p6' },
    ]
  }
];

const RewardsScreen = () => {
  const [selectedReward, setSelectedReward] = useState(null);
  const router = useRouter();

  return (
    <View style={{flex: 1, backgroundColor: '#FEF7E9'}}>
      <PageHeader title="Rewards" onBack={() => router.back()} />
      <ScrollView contentContainerStyle={rewardsStyles.container}>
        <View style={rewardsStyles.infoBox}>
          <Text style={rewardsStyles.infoText}>
            Rewards are valid for a few days. If they don't work, they may have expired or already been used on your account.
          </Text>
        </View>

        {rewardsByDate.map((group) => (
          <View key={group.date} style={rewardsStyles.group}>
            <Text style={rewardsStyles.dateHeader}>{group.date}</Text>
            {group.rewards.map(reward => (
              <TouchableOpacity
                key={reward.id}
                style={rewardsStyles.rewardButton}
                onPress={() => setSelectedReward(reward)}
                activeOpacity={0.8}
              >
                <View style={rewardsStyles.rewardContent}>
                  <MaterialCommunityIcons name="power" size={24} color="#FFC107" />
                  <Text style={rewardsStyles.rewardText}>{reward.amount} {reward.type}</Text>
                </View>
                <CalendarIcon />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
      {selectedReward && <RewardModal reward={selectedReward} onClose={() => setSelectedReward(null)} />}
    </View>
  );
};

export default RewardsScreen;

const rewardsStyles = StyleSheet.create({
    container: { padding: 16 },
    infoBox: { backgroundColor: '#EBE3D3', padding: 12, borderRadius: 8, marginBottom: 24 },
    infoText: { color: '#8C7B65', textAlign: 'center', fontSize: 14 },
    group: { marginBottom: 16 },
    dateHeader: { textAlign: 'center', fontWeight: 'bold', color: '#6B4F3A', marginBottom: 12, fontSize: 16 },
    rewardButton: { backgroundColor: 'white', borderWidth: 1, borderColor: '#E0D3B5', borderRadius: 12, padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 },
    rewardContent: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    rewardText: { fontSize: 18, fontWeight: '600', color: '#495057' }
});