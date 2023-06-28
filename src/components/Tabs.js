import React from "react"
import { Platform, StatusBar } from "react-native"

import CurrentWeather from "../screens/CurrentWeather"
import UpcomingWeather from "../screens/UpcomingWeather"
import City from "../screens/City"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Feather } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()

const Tabs = ({ weather }) => {
    return (
        <>
            {Platform.OS === 'android' ? (
                <TopTab.Navigator
                    screenOptions={{
                        tabBarActiveTintColor: 'forestgreen',
                        tabBarInactiveTintColor: 'grey',
                        tabBarStyle: {
                            backgroundColor: 'cornsilk'
                        }
                }}
                style={{ marginTop: StatusBar.currentHeight || 0 }} >
                    <TopTab.Screen name={'Current'} options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather name={'droplet'} size={20} color={focused ? 'forestgreen' : 'black'} /> 
                        )
                    }} >
                        {() => <CurrentWeather weatherData={weather.list[0]} />}
                    </TopTab.Screen>

                    <TopTab.Screen name={'Upcoming'} options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather name={'clock'} size={20} color={focused ? 'forestgreen' : 'black'} />
                        )
                    }} >
                        {() => <UpcomingWeather weatherData={weather.list} />}
                    </TopTab.Screen>

                    <TopTab.Screen name={'City'} options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather name={'home'} size={20} color={focused ? 'forestgreen' : 'black'} />
                        )
                    }} >
                        {() => <City weatherData={weather.city} />}
                    </TopTab.Screen>
                </TopTab.Navigator>
            ) : (
                <BottomTab.Navigator
                    screenOptions={{
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'grey'
                    }} >
                    <BottomTab.Screen name={'Current'} options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather name={'droplet'} size={20} color={focused ? 'forestgreen' : 'black'} /> 
                        )
                    }} >
                        {() => <CurrentWeather weatherData={weather.list[0]} />}
                    </BottomTab.Screen>

                    <BottomTab.Screen name={'Upcoming'} options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather name={'clock'} size={20} color={focused ? 'forestgreen' : 'black'} />
                        )
                    }} >
                        {() => <UpcomingWeather weatherData={weather.list} />}
                    </BottomTab.Screen>

                    <BottomTab.Screen name={'City'} options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather name={'home'} size={20} color={focused ? 'forestgreen' : 'black'} />
                        )
                    }} >
                        {() => <City weatherData={weather.city} />}
                    </BottomTab.Screen>
                </BottomTab.Navigator>
            )}     
        </>
    )
}

export default Tabs