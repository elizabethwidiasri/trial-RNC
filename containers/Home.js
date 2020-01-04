import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import {getCards} from '../store/action'
import Greeting from '../components/Greeting'
// import Blink from './components/Blink'

export default function Home() {

  const cards = useSelector(store => store.cards)
  const dispatch = useDispatch()

  const pics = [
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-01_black_360x.png?v=1548397922',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-02_black_360x.png?v=1548398300',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-03_black_360x.png?v=1548398381',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-04_black_360x.png?v=1548398487',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-05_black_360x.png?v=1548398552',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-06_black_360x.png?v=1548398614',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-07_black_360x.png?v=1548398651',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-08_black_360x.png?v=1548398705',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-09_black_360x.png?v=1548398810',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-10_black_360x.png?v=1548398871',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-11_black_360x.png?v=1548398914',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-12_black_360x.png?v=1548398985',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-13_black_360x.png?v=1548399036',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-14_black_360x.png?v=1548399090',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-15_black_360x.png?v=1548399149',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-16_black_360x.png?v=1548399206',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-17_black_360x.png?v=1548399259',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-18_black_360x.png?v=1548399303',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-19_black_360x.png?v=1548399355',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-20_black_360x.png?v=1548399402',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/MarjorArcana-KristineTarot-21-black_360x.png?v=1554138688',
    'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/MarjorArcana-KristineTarot-22-black_360x.png?v=1554138716'

 ]
  

  const pict = {
    fool : { uri :  'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-01_black_360x.png?v=1548397922'},
    magician: { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-02_black_360x.png?v=1548398300'},
    high : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-03_black_360x.png?v=1548398381'},
    empress : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-04_black_360x.png?v=1548398487'},
    emperor : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-05_black_360x.png?v=1548398552'},
    hierophant : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-06_black_360x.png?v=1548398614'},
    lovers : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-07_black_360x.png?v=1548398651'},
    chariot : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-08_black_360x.png?v=1548398705'},
    strength : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-09_black_360x.png?v=1548398810'},
    hermit : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-10_black_360x.png?v=1548398871'},
    wheel : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-11_black_360x.png?v=1548398914'},
    justice : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-12_black_360x.png?v=1548398985'},
    hanged : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-13_black_360x.png?v=1548399036'},
    death : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-14_black_360x.png?v=1548399090'},
    temperance : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-15_black_360x.png?v=1548399149'},
    devil : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-16_black_360x.png?v=1548399206'},
    tower : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-17_black_360x.png?v=1548399259'},
    star : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-18_black_360x.png?v=1548399303'},
    moon : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-19_black_360x.png?v=1548399355'},
    sun : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/Marjor-Arcana-20_black_360x.png?v=1548399402'},
    judgement : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/MarjorArcana-KristineTarot-21-black_360x.png?v=1554138688'},
    world : { uri : 'https://cdn.shopify.com/s/files/1/0032/1801/4308/products/MarjorArcana-KristineTarot-22-black_360x.png?v=1554138716'}
  }

  useEffect(() => {
    dispatch(getCards())
  }, [])

  return (
    <>
      <ScrollView style={styles.scrollView}>
        {/* <Text style={{color: '#fff'}}>{JSON.stringify(cards)}</Text> */}
        <View style={{flexDirection: 'row', marginHorizontal: 20, alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'space-between',  marginTop: 30,  marginBottom: 50}}>
          { cards.length > 1 ? cards.map((card, i) => (
              <Image key={'card' + i} source={{ uri : pics[i]}} style={styles.board} />
          )) : <Text>Loading...</Text>
        }
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
    backgroundColor: '#101010',
    paddingTop: 20,
 
  },
  board: {
    width: '30%',
    aspectRatio: 4/7,
    marginTop: 14
  }
});
