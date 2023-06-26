import React, { useState, useEffect } from "react"
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import {WEATHER_API_KEY} from '@env'
import * as Location from 'expo-location'

import Tabs from "./src/components/Tabs"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
      const data = await res.json()
      
      setWeather(data)
    } catch (e) {
      setError('Could not fetch weather')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setError('Permission to access location was denied!')
        
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)

      await fetchWeatherData()
    })() // this parenthesis immediately invocs the effect
  }, [lat, lon])

  if (weather) {
    console.log(weather)
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App