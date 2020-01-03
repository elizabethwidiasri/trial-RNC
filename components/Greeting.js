import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Greeting({name}) {
  return (
    <>
    <View style={styles.container}>
      <Text>Hi, there {name}</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    alignItems: 'center'
  }
})