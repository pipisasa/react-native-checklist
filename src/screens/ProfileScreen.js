import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { authContext } from '../context/AuthContext';

export default function ProfileScreen() {

  const { toggleLogin } = React.useContext(authContext)

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button onPress={toggleLogin}>Logout</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
