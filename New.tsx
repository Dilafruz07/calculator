import React,{useState} from 'react';
import { Text, View,StyleSheet } from 'react-native';

export const New = () => {
    return(
        <View>
            <Text style={styles.text}>SALAM</Text>
        </View>
    )
}
const styles =StyleSheet.create({
    text:{
        color:'tomato',
        fontSize:50,
        fontWeight:'bold',
        marginBottom:12,
    }

})
