import React from "react"
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, ImageBackground } from "react-native"

import { Feather } from '@expo/vector-icons'

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

const Item = (props) => {
    const { dt_text, min, max, condition } = props
    
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'} />

            <Text style={styles.date}>{dt_text}</Text>
            <Text style={styles.temp}>- {min}</Text>
            <Text style={styles.temp}>|  {max}</Text>
        </View>
    )
}

const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <Item
            condition={item.weather[0].main}
            dt_text={item.dt_text}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )
    
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/upcomingWeather-background.jpg')}
                style={styles.backgroundImage}
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
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'orange'
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15    
    },
    backgroundImage: {
        flex: 1
    }
})

export default UpcomingWeather