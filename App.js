import React from "react"
import { View, StyleSheet, StatusBar } from "react-native"

import CurrentWeather from "./src/screens/CurrentWeather"
import UpcomingWeather from "./src/screens/UpcomingWeather"
import City from "./src/screens/City"

const App = () => {
  return (
    <View style={styles.container}>
      <City />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
})

export default App