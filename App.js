import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import Greeting from './components/Greeting'
// import Blink from './components/Blink'

export default function App() {
  const pict = {
    uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/MarjorArcana-KristineTarot-22-black_360x.png?v=1554138716'
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.hello}>Indulgencia</Text>
        <Greeting name="Leonna"></Greeting>
        {/* <Blink></Blink> */}
        <Image source={pict} style={{width: 200, height: 352}} />

      </View>
    </>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    paddingTop: 40
    // justifyContent: 'center',
  },
  hello : {
    color: '#fff',
    fontSize: 33,
    marginBottom: 15 
  }
});
