import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=aab9264ef8ab0421f2bd41b5b2f33007`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp}); 
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
    
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text style={styles.t1}>Zip Code</Text>
                <Text style={styles.t2}>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    t1: {
        fontSize: 30 ,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)',
        width: '100%',
    },
    t2: {
        fontSize: 50 ,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)',
        width: '100%',
    },
});
   