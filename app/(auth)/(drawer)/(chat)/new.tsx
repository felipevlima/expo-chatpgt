import HeaderDropDown from "@/components/HeaderDropDown"
import Colors from "@/constants/Colors"
import { defaultStyles } from "@/constants/Styles"
import { useAuth } from "@clerk/clerk-expo"
import { Ionicons } from "@expo/vector-icons"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Button, Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const New = () => {
  const { signOut } = useAuth()
  const [gptVersion, setGptVersion] = useState('3.5')
  const { bottom, top } = useSafeAreaInsets()

  return (
    <View style={defaultStyles.pageContainer}>
      <StatusBar style="dark"/>
      <Stack.Screen options={{
        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center', gap: 4}}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>ChatGPT</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: Colors.greyLight }}>4o</Text>
            </View>
            <Ionicons name="sparkles" size={20} color={Colors.pink} />
          </View>
        )
      }} />
      {/* <Stack.Screen options={{
        headerTitle: () => <HeaderDropDown title="Test" items={[
          {
            key: '3.5',
            title: 'GPT-3.5',
            icon: 'bolt' 
          },
          {
            key: '4',
            title: 'GPT-4',
            icon: 'sparkles' 
          },
        ]}
        selected={gptVersion}
        onSelect={() => null}/>,
      }}/> */}
      <View style={{ flex: 1, padding: 16, paddingBottom: bottom }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={[styles.item, { backgroundColor: "#000" }]}>
            <Image source={require('@/assets/images/logo-white.png')} style={styles.btnImage}/>
          </View>
        </View>
      </View>
    </View>
  )
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
  btnImage: {
    margin: 6,
    width: 32,
    height: 32
  },
  item: {
    height: 48,
    width: 48,
    borderRadius: 32,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default New