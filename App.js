import React from "react"
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"

import Tabs from "./src/components/Tabs"
import { useGetWweather } from "./src/hooks/useGetWeather"

const App = () => {
  const [isLoading, error, weather] = useGetWweather()
  console.log(isLoading, error, weather)

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App