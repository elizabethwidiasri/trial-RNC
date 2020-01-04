import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import Greeting from './components/Greeting'
// import Blink from './components/Blink'

export default function App() {

  const pic = {
    fool : { uri :  'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/MarjorArcana-KristineTarot-22-black_360x.png?v=1554138716'},
    emperor : { uri :  'https://i.pinimg.com/564x/fa/7c/0a/fa7c0a698634db94531aff4017d58ccd.jpg'},
    knight : { uri :  'https://i.pinimg.com/564x/1b/67/ad/1b67ad35d1c1687b72fbf608241daf96.jpg'}
  }

  return (
    <>
      <ScrollView style={styles.scrollView}>
        {/* <Text style={styles.hello}>Indulgencia</Text>
        <Greeting name="Leonna"></Greeting> */}
        {/* <Blink></Blink> */}
        <View style={{flexDirection: 'row', marginHorizontal: 20, alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        <Image source={pic.fool} style={styles.board} />
        <Image source={pic.knight} style={styles.board} />
        <Image source={pic.emperor} style={styles.board} />
        <Image source={pic.emperor} style={styles.board} />
        </View>

      </ScrollView>
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
  },
  scrollView: {
    backgroundColor: '#ccc',
    paddingTop: 20
  },
  board: {
    width: '30%',
    aspectRatio: 4/7,
    marginTop: 14
  }
});
