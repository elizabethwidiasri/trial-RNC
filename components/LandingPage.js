import React from 'react'
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  Button, 
  Alert
} from 'react-native'

export default function LandingPage() {
  return (
    <>
    <View style={styles.container}>
      <Button 
        title="Witch, please!"
        onPress={() => Alert.alert('Welcome to the world of unknown')}
      />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center'

  }
})