import React from "react"
import { StyleSheet, StatusBar, Platform } from "react-native"

import CurrentWeather from "./src/screens/CurrentWeather"
import UpcomingWeather from "./src/screens/UpcomingWeather"
import City from "./src/screens/City"

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Feather } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator()
const TopTap = createMaterialTopTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      {Platform.OS === 'android' ? (
        <TopTap.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'forestgreen',
            tabBarInactiveTintColor: 'grey'
          }}
          style={{ marginTop: StatusBar.currentHeight || 0 }}
        >
          <TopTap.Screen name={'Current'} component={CurrentWeather} options={{
            tabBarIcon: ({ focused }) => (
              <Feather name={'droplet'} size={20} color={focused ? 'forestgreen' : 'black'} /> 
            )
           }} />
          <TopTap.Screen name={'Upcoming'} component={UpcomingWeather} options={{
            tabBarIcon: ({ focused }) => (
              <Feather name={'clock'} size={20} color={focused ? 'forestgreen' : 'black'} />
            )
          }} />
          <TopTap.Screen name={'City'} component={City} options={{
            tabBarIcon: ({ focused }) => (
              <Feather name={'home'} size={20} color={focused ? 'forestgreen' : 'black'} />
            )
          }} />
        </TopTap.Navigator>
      ) : (
        <BottomTab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey'
        }}
        >
          <BottomTab.Screen name={'Current'} component={CurrentWeather} options={{
            tabBarIcon: ({ focused }) => (
              <Feather name={'droplet'} size={20} color={focused ? 'forestgreen' : 'black'} /> 
            )
           }} />
          <BottomTab.Screen name={'Upcoming'} component={UpcomingWeather} options={{
            tabBarIcon: ({ focused }) => (
              <Feather name={'clock'} size={20} color={focused ? 'forestgreen' : 'black'} />
            )
          }} />
          <BottomTab.Screen name={'City'} component={City} options={{
            tabBarIcon: ({ focused }) => (
              <Feather name={'home'} size={20} color={focused ? 'forestgreen' : 'black'} />
            )
          }} />
        </BottomTab.Navigator>
      )}     
    </NavigationContainer>
  )
}

export default App