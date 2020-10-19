import React, { useContext } from 'react'
// import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

import { authContext } from '../context/AuthContext'

export default function LoginScreen() {
  // const nav = useNavigation();
  const { toggleLogin } = useContext(authContext);
  return (
    <View>
      <Button onPress={toggleLogin}>LOGIN</Button>
    </View>
  )
}
