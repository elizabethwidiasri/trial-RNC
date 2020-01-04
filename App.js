import React from 'react'
import {Provider} from 'react-redux'
import { Text, View } from 'react-native'
import store from './store'
import Home from './containers/Home'

export default function App() {
  return (
    <>
    <Provider store={store}>
      <Home />
    </Provider>
    </>
  )
}