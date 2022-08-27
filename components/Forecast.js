import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Forecast(props) {
    return (
    <View style={styles.t3}>
        <Text style={styles.t1}>{props.main}</Text>
        <Text style={styles.t2}>{props.description}</Text>
        <Text style={styles.t1}>{props.temp}</Text>
        <Text style={styles.t2}>°C</Text>
    </View>
    );
}
const styles = StyleSheet.create({
    t1: {
        fontSize: 35 ,
        color: 'white',
        textAlign: 'center',
    },
    t2: {
        fontSize: 30 ,
        color: 'white',
        textAlign: 'center',
    },
    t3:{
        backgroundColor: 'rgba(0, 0, 0, .5)',
        width: '100%',
    }
});