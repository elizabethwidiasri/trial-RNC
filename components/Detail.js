import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'

export default function Detail() {
  return (
    <>
      <View style={styles.container}>
        <Text>Detail</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
})