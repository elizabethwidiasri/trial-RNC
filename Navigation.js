import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import Detail from './components/Detail'
import LandingPage from './components/LandingPage'
import Home from './containers/Home'

const stackNavigator = createStackNavigator({
  Home,
  Detail
})

const rootNavigator = createSwitchNavigator({
  LandingPage,
  stackNavigator
})

export default createAppContainer(rootNavigator)