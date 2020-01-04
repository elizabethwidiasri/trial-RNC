import React from 'react'
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  Button, 
  Alert
} from 'react-native'

export default function LandingPage(props) {
  return (
    <>
    <View style={styles.container}>
      <Button 
        title="Witch, please!"
        onPress={() => props.navigation.navigate('Home') }
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