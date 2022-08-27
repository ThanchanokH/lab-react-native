import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Trang', code: '83000' },
    { place: 'Lampang', code: '52000' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() =>
        navigation.navigate('Weather', { zipCode: code})
    }>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code
   
export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <FlatList
            data={availableZipItems}
            keyExtractor={_keyExtractor}
            renderItem={({item}) => <ZipItem {...item} navigation={navigation} />}
            style={styles.bg} />
    );
   
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    zipPlace: {
        flex: 1,
        padding: 20,
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
    },
    zipCode: {
        flex: 1,
        padding: 20,
        fontSize:20,
        color: 'white',
        fontWeight: "bold",
    },
    bg: {
        backgroundColor: 'steelblue',
    },
})