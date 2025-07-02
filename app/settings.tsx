// Create this new file for the Settings Screen.

import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import PageHeader from '../components/PageHeader';

const SettingsScreen = () => {
    const [notifications, setNotifications] = useState(true);
    const router = useRouter();

    const SettingRow = ({ icon, label, rightContent, isNav = false }) => (
        <View style={settingsStyles.row}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {icon}
                <Text style={settingsStyles.rowLabel}>{label}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                {rightContent}
                {isNav && <Feather name="chevron-right" size={22} color="#C0C0C0" />}
            </View>
        </View>
    );

    return (
        <View style={{flex: 1, backgroundColor: '#F8F9FA'}}>
            <PageHeader title="Settings" onBack={() => router.back()} />
            <ScrollView contentContainerStyle={settingsStyles.container}>
                <Text style={settingsStyles.sectionHeader}>General</Text>
                <View style={settingsStyles.section}>
                    <TouchableOpacity>
                        <SettingRow label="Language" isNav={true} rightContent={
                            <>
                                <Text style={settingsStyles.rightText}>English</Text>
                                <Image source={{ uri: 'https://placehold.co/48x36/F00/FFF?text=US' }} style={settingsStyles.flag} />
                            </>
                        }/>
                    </TouchableOpacity>
                </View>

                <Text style={settingsStyles.sectionHeader}>Notifications</Text>
                <View style={settingsStyles.section}>
                    <View style={settingsStyles.row}>
                        <View style={{flex: 1, marginRight: 10}}>
                            <Text style={settingsStyles.rowLabelNoIcon}>New rewards</Text>
                            <Text style={settingsStyles.rowSubLabel}>Receive a notification as soon as a new reward is posted online</Text>
                        </View>
                        <Switch
                            trackColor={{ false: "#E0E0E0", true: "#81C784" }}
                            thumbColor={notifications ? "#4CAF50" : "#f4f3f4"}
                            onValueChange={() => setNotifications(p => !p)}
                            value={notifications}
                        />
                    </View>
                </View>

                {/* Other sections... */}
            </ScrollView>
        </View>
    );
};
export default SettingsScreen;

const settingsStyles = StyleSheet.create({
    container: { padding: 16 },
    sectionHeader: { fontSize: 14, color: '#6c757d', marginBottom: 8, paddingHorizontal: 16 },
    section: { backgroundColor: 'white', borderRadius: 12, marginBottom: 32, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 },
    row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 },
    rowLabel: { fontSize: 16, fontWeight: '500', marginLeft: 16 },
    rowLabelNoIcon: { fontSize: 16, fontWeight: '500' },
    rowSubLabel: { fontSize: 13, color: '#6c757d', marginTop: 2 },
    rightText: { fontSize: 16, color: '#6c757d' },
    flag: { width: 24, height: 18, borderRadius: 3 },
});
