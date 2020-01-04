import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator} from 'react-navigation-tabs'
import Reading from './components/Reading'
import Profile from './components/Profile'
import Detail from './components/Detail'
import LandingPage from './components/LandingPage'
import Home from './containers/Home'

const stackNavigator = createStackNavigator({
  Home,
  Detail
})

const tabNavigator = createBottomTabNavigator({
  Reading,
  Home : {
    screen : stackNavigator
  },
  Profile
})

const rootNavigator = createSwitchNavigator({
  LandingPage,
  tabNavigator
})

export default createAppContainer(rootNavigator)