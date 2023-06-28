import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from "../utilities/weatherType"

import moment from "moment"

const ListItem = (props) => {
    const { dt_text, min, max, condition } = props
    const { item, date, temp, dateTextWrapper } = styles // using styles without doing 'styles.blablabla'

    return (
        <View style={item}>
            <Feather name={weatherType[condition].icon} size={50} color={'white'} />
            <View styles={dateTextWrapper}>
                <Text style={date}>{moment(dt_text).format('dddd')}</Text>
                <Text style={date}>{moment(dt_text).format('LTS')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}°C | ${Math.round(max)}°C`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
    dateTextWrapper: {
        flexDirection: 'column'
    }
})

export default ListItem