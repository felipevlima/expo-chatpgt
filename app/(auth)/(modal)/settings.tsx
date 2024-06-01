import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { useAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



const Settings = () => {
  const { signOut } = useAuth()

  return (
    <View style={defaultStyles.pageContainer}>
       <Stack.Screen options={{
          headerTitle: 'Settings',
      }} />
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{flex: 1, gap: 12 }}>
          <Image source={{ uri: "https://github.com/felipevlima.png" }} style={styles.avatar}/>
          <Text style={styles.name}>Felipe Vieira Lima</Text>
          <Text style={styles.appVersion}>App Version: 1.0.0</Text>
        </View>
        <TouchableOpacity style={[defaultStyles.btn, styles.btnPrimary]} onPress={() => signOut()}>
          <Text style={styles.btnPrimaryText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: Colors.primary,
    marginVertical: 4,
  },
  btnPrimaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 12,
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  appVersion: {
    fontSize: 16,
    color: Colors.greyLight,
    alignSelf: 'center',
  },
})

export default Settings