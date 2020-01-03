import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Greeting from './components/Greeting'
// import Blink from './components/Blink'

export default function App() {
  const pict = {
    uri : 'https://4.bp.blogspot.com/-W-EqUfqBIIY/WkX47-Q-7PI/AAAAAAAAm8g/aynbxQ_d2CIiJ-oXjIPDw_tmcaaHBWroACLcBGAs/s1600/my-paradissi-2017-favorite-decor-trends-posts.jpg'
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.hello}>Hello</Text>
        <Greeting name="Martha"></Greeting>
        {/* <Blink></Blink> */}
        <Image source={pict} style={{width: 193, height: 310}} />
      </View>
    </>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello : {
    color: '#fff',
    fontSize: 33,
    marginBottom: 15 
  }
});
