import React from 'react'
import {Provider} from 'react-redux'
import { Text, View } from 'react-native'
import store from './store'
import Navigation from './Navigation'

export default function App() {
  return (
    <>
    <Provider store={store}>
      <Navigation />
    </Provider>
    </>
  )
}