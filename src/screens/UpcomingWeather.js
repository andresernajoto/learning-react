import React from "react"
import { SafeAreaView, StyleSheet, Text, FlatList, ImageBackground } from "react-native"

import ListItem from '../components/ListItem'

const data = [
    {
        dt_text: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [{
            main: 'Clear'
        }]
    },
    {
        dt_text: "2023-02-18 15:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [{
            main: 'Clouds'
        }]
    },
    {
        dt_text: "2023-02-18 18:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [{
            main: 'Rain'
        }]
    }
]

const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <ListItem
            condition={item.weather[0].main}
            dt_text={item.dt_text}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )

    const { container, backgroundImage } = styles
    
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/upcomingWeather-background.jpg')}
                style={backgroundImage}
            >
                <Text>Upcoming Weather</Text>

                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.dt_text}
                />

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'royalblue'
    },
    backgroundImage: {
        flex: 1
    }
})

export default UpcomingWeather