import Colors from "@/constants/Colors"
import { defaultStyles } from "@/constants/Styles"
import { useSignIn, useSignUp } from "@clerk/clerk-expo"
import { useLocalSearchParams } from "expo-router"
import { useState } from "react"
import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useSafeArea, useSafeAreaInsets } from "react-native-safe-area-context"

const Login = () => {
  const { type } = useLocalSearchParams<{ type: string }>()
  const [loading, setLoading] = useState(false)
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState('')
  const { bottom } = useSafeAreaInsets()

  const { signIn, isLoaded, setActive } = useSignIn()

  const { signUp, isLoaded: signUpLoaded, setActive: signupSetActive } = useSignUp()

  const onSignUpPress = async () => {
    if (!signUpLoaded) return;
    setLoading(true)

    try {
      const result = await signUp.create({ emailAddress, password })
      console.log(result)

      signupSetActive({
        session: result.createdSessionId
      })
    } catch(err: any) {
      console.log(err)
      Alert.alert(err.errors[0].message)
    } finally {
      setLoading(false)
    }
  }

  const onSignInPress = async () => {
    if (!isLoaded) return;
    setLoading(true)

    try {
      const result = await signIn.create({ identifier: emailAddress, password })
      setActive({
        session: result.createdSessionId
      })
    } catch(error: any) {
      console.log(error)
      Alert.alert(error.errors[0].message)
    } finally {
      setLoading(false)
    }
  } 

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={1}>
      {loading && 
        <View style={defaultStyles.loadingOverlay}>
          <ActivityIndicator size={"small"} color="#fff"/>
        </View>
      }
      <Image source={require('@/assets/images/logo-dark.png')} style={styles.logo} />  
      <Text style={styles.title}>
        {type === 'login' ? 'Welcome back' : 'Create your acconut'}
      </Text>
      <View style={{ marginBottom: 30 }}>
        <TextInput style={styles.inputField} placeholder="Email" autoCapitalize="none" value={emailAddress} onChangeText={setEmailAddress} placeholderTextColor={Colors.grey}/>
        <TextInput style={styles.inputField} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} placeholderTextColor={Colors.grey}/>
      </View>

      {type === 'login' ? (
        <TouchableOpacity style={[defaultStyles.btn, styles.btnPrimary]} onPress={onSignInPress}>
          <Text style={styles.btnPrimaryText}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={[defaultStyles.btn, styles.btnPrimary]} onPress={onSignUpPress}>
          <Text style={styles.btnPrimaryText}>Create account</Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginVertical: 80
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    alignSelf: 'center' 
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 12,
    padding: 10,
    backgroundColor: '#fff'
  },
  btnPrimary: {
    backgroundColor: Colors.primary,
    marginVertical: 4,
  },
  btnPrimaryText: {
    color: '#fff',
    fontSize: 16,
  },
})
export default Login