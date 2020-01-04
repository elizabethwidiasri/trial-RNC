import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import LandingPage from './components/LandingPage'
import Home from './containers/Home'

const rootNavigator = createSwitchNavigator({
  LandingPage,
  Home : {
    screen: Home
  }
})

export default createAppContainer(rootNavigator)