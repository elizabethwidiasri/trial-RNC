import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'

export default function Detail(props) {
  return (
    <>
      <View style={styles.container}>
    <Image source={{uri: props.navigation.getParam('pics')}} style={{width: 200, aspectRatio: 4/7}}></Image>
  <Text>Detail {JSON.stringify(props.navigation.getParam('card'))}</Text>
  <Text>___________________________</Text>
<Text>gambarnya {JSON.stringify(props.navigation.getParam('pics'))}</Text>
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