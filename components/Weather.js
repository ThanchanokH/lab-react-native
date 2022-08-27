import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

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
        fontSize: 40 ,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)',
        width: '100%',
    },
    t2: {
        fontSize: 45 ,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)',
        width: '100%',
    },
});
   