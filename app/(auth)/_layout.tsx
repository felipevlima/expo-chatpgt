import Colors from "@/constants/Colors"
import { FontAwesome6, Ionicons } from "@expo/vector-icons"
import { DrawerActions } from "@react-navigation/native"
import { Stack, useNavigation, useRouter } from "expo-router"
import { TouchableOpacity, useWindowDimensions } from "react-native"

const Layout = () => {
  const router = useRouter()
  return <Stack>
    <Stack.Screen 
      name="(drawer)" 
      options={{ 
        headerShown: false,
        presentation: 'modal',
        title: '', 
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close-outline" size={28}/>
          </TouchableOpacity>
        )
      }} />
    
  </Stack>
}

export default Layout
