import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, View } from "react-native";

import { Feather } from '@expo/vector-icons'

const City = () => {  
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                style={styles.backgroundImage} >

                <View style={styles.textColor}>
                    <Text style={[styles.cityName, styles.cityText]}>London</Text>
                    <Text style={[styles.countryName, styles.cityText]}>UK</Text>

                    <View style={styles.populationWrapper}>
                        <Feather name={'user'} size={24} color={'gold'} />
                        <Text style={styles.populationText}>8000</Text>
                    </View>

                    <View style={styles.riseSetWrapper}>
                        <Feather name={'sunrise'} size={50} color={'white'} />
                        <Text style={styles.riseSetText}>10:46:58am</Text>
                        
                        <Feather name={'sunset'} size={50} color={'white'} />
                        <Text style={styles.riseSetText}>17:28:15pm</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'gold',
        fontWeight: 'bold'
    },
    riseSetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 15
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    textColor: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 20
    }
})

export default City