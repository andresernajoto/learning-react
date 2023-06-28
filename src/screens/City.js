import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, View } from "react-native";

import IconText from "../components/IconText";
import moment from 'moment';

const City = ({ weatherData }) => {  
    const { container,
            backgroundImage,
            cityName,
            cityText,
            countryName, 
            populationWrapper, 
            populationText,
            riseSetWrapper,
            riseSetText,
            rowLayout } = styles
    
    const { country, name, population, sunrise, sunset } = weatherData
    
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/city-background.jpg')}
                style={backgroundImage} >

                <View style={styles.textColor}>
                    <Text style={[cityName, cityText]}>{name}</Text>
                    <Text style={[countryName, cityText]}>{country}</Text>

                    <View style={[populationWrapper, rowLayout]}>
                        <IconText
                            iconName={'user'} 
                            iconColor={'gold'} 
                            bodyText={`Population: ${population}`} 
                            bodyTextStyles={populationText}
                        />
                    </View>

                    <View style={[riseSetWrapper, rowLayout]}>
                        <IconText
                            iconName={'sunrise'} 
                            iconColor={'white'} 
                            bodyText={moment(sunrise).format('LTS')}
                            bodyTextStyles={riseSetText}
                        />
                        
                        <IconText
                            iconName={'sunset'} 
                            iconColor={'white'} 
                            bodyText={moment(sunset).format('LTS')}
                            bodyTextStyles={riseSetText}
                        />
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
        justifyContent: 'center',

        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'gold'
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 15
    },
    riseSetText: {
        fontSize: 20,
        color: 'white'
    },
    textColor: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 20
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default City