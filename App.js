import React from "react"
import { StyleSheet, StatusBar, Platform } from "react-native"

import CurrentWeather from "./src/screens/CurrentWeather"
import UpcomingWeather from "./src/screens/UpcomingWeather"
import City from "./src/screens/City"

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const BottomTab = createBottomTabNavigator()
const TopTap = createMaterialTopTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      {Platform.OS === 'android' ? (
        <TopTap.Navigator  style={{ marginTop: StatusBar.currentHeight || 0 }}>
          <TopTap.Screen name={'Current'} component={CurrentWeather} />
          <TopTap.Screen name={'Upcoming'} component={UpcomingWeather} />
          <TopTap.Screen name={'City'} component={City} />
        </TopTap.Navigator>
      ) : (
        <BottomTab.Navigator>
          <BottomTab.Screen name={'Current'} component={CurrentWeather} />
          <BottomTab.Screen name={'Upcoming'} component={UpcomingWeather} />
          <BottomTab.Screen name={'City'} component={City} />
        </BottomTab.Navigator>
      )}     
    </NavigationContainer>
  )
}

export default App