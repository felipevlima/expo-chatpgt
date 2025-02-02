import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from "react-native"
import { Drawer } from 'expo-router/drawer'
import { Link, useNavigation } from "expo-router"
import { FontAwesome6, Ionicons } from "@expo/vector-icons"
import Colors from "@/constants/Colors"
import { DrawerActions } from "@react-navigation/native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import { useAuth } from "@clerk/clerk-expo"
import { StatusBar } from "expo-status-bar"

export const CustomDrawerContent = (props: any) => {
  const { bottom, top } = useSafeAreaInsets()

  return (
    <View style={{ flex: 1, marginTop: top }}>
      <View style={{ backgroundColor: '#fff', paddingBottom: 16 }}>
        <View style={styles.searchSection}>
          <Ionicons style={styles.searchIcon} name="search" size={20} color={Colors.greyLight}/>
          <TextInput placeholder="Search" underlineColorAndroid='transparent' style={styles.input} placeholderTextColor={Colors.greyLight}/>
        </View>
      </View>
      <DrawerContentScrollView contentContainerStyle={{ paddingTop: 0 }} {...props}>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
      <View style={{ padding: 16, paddingBottom: bottom }}>
        <Link href="/(auth)/(modal)/settings" asChild>
          <TouchableOpacity style={styles.footer}>
            <Image source={{ uri: "https://avatars.githubusercontent.com/u/31170444?v=4" }} style={styles.avatar}/>
            <Text style={styles.username}>Felipe Vieira</Text>
            <Ionicons name="ellipsis-horizontal" size={24} color={Colors.greyLight} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

const Layout = () => {
  const navigation = useNavigation()
  const dimentions = useWindowDimensions()

  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)} style={{ marginLeft: 16 }}>
            <FontAwesome6 name="grip-lines" size={20} color={Colors.grey}/>  
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: Colors.light
        },
        headerShadowVisible: false,
        drawerActiveBackgroundColor: Colors.selected,
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: "#000",
        drawerItemStyle: { borderRadius: 12 },
        drawerLabelStyle: { marginLeft: -20 },
        overlayColor: 'rgba(0, 0, 0, 0.2)',
        drawerStyle: {
          width: dimentions.width * 0.86
        }
      }}
    >
       <Drawer.Screen name="(chat)/new"
        getId={() => Math.random().toString()}
        options={{
          title: 'ChatGPT',
          drawerIcon: () => (
            <View style={[styles.item, { backgroundColor: "#000" }]}>
              <Image source={require('@/assets/images/logo-white.png')} style={styles.btnImage}/>
            </View>
          ),
          headerRight: () => (
            <Link href="/(auth)/(drawer)/(chat)/new" push asChild>
              <TouchableOpacity>
                <Ionicons name="create-outline" size={24} color={Colors.grey} style={{ marginRight: 16 }}/>
              </TouchableOpacity>
            </Link>
          )
        }}
      />
      <Drawer.Screen name="dalle"
        getId={() => Math.random().toString()}
        options={{
          title: 'DALL-E',
          drawerIcon: () => (
            <View style={[styles.item, { backgroundColor: "#000" }]}>
              <Image source={require('@/assets/images/dalle.png')} style={styles.dalleImage}/>
            </View>
          ),
        }}
      />
      <Drawer.Screen name="explore"
        getId={() => Math.random().toString()}
        options={{
          title: 'Explore GPTs',
          drawerIcon: () => (
            <View style={styles.itemExplore}>
              <Ionicons name="apps-outline" size={16} color={"#000"} />
            </View>
          ),
        }}
      />
    </Drawer>
  )
}

const styles = StyleSheet.create({
  item: {
    borderRadius: 15,
    overflow: 'hidden'
  },
  btnImage: {
    margin: 6,
    width: 16,
    height: 16
  },
  dalleImage: {
    width: 28,
    height: 28, 
    resizeMode: 'cover'
  },
  itemExplore: {
    borderRadius: 15,
    backgroundColor: "#fff", 
    width: 28, 
    height: 28,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchSection: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.input,
    borderRadius: 10,
    height: 34
  },
  searchIcon: {
    padding: 6,
  },
  input: {
    flex: 1,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 0,
    alignItems: 'center',
    color: '#424242'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  }
})

export default Layout