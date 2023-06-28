import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, } from 'react-native'

import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const { container,
          wrapper,
          tempStyles,
          feels,
          highLowWrapper,
          highLow,
          bodyWrapper,
          description,
          message,
          descText } = styles
  
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0]?.main
  
  return (
    <SafeAreaView style={[wrapper, { backgroundColor: weatherType[weatherCondition]?.backgroundColor }]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="black" />

        <Text style={tempStyles}>{`${temp}°C`}</Text>
        <Text style={feels}>{`Feels like: ${feels_like}°C`}</Text>
        
        <RowText
          messageOne={`High: ${temp_max}°C | `}
          messageTwo={`Low: ${temp_min}°C`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>

      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', }}>
        <RowText
          messageOne={weather[0]?.description}
          messageTwo={weatherType[weatherCondition]?.message}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1
  },
  tempStyles: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  description: {
    fontSize: 35,
    color: 'white',    
  },
  message: {
    fontSize: 20,
    color: 'white'
  },
})

export default CurrentWeather