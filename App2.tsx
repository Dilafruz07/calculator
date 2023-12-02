import React,{useState} from 'react';
import {  Button, SafeAreaView, StyleSheet, Text, TouchableOpacity,Pressable, TouchableOpacityBase} from 'react-native';

export function App(){
    const [count,setCount] =useState(5);                                   
    const artim= ()=>{
        setCount(count+1);
    };
    const azalma=()=>{
        setCount(count-1);
    };
    return(
        <SafeAreaView style={styles.main}>
            <Text style={styles.text}>{count}</Text>
            <TouchableOpacity style={styles.button} onPress={artim} >
                <Text style={styles.click}>art</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={azalma} >
                <Text style={styles.click}>azal</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles =StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'tomato',
        fontSize:50,
        fontWeight:'bold',
        marginBottom:12,
    },
    button:{
        width:'80%',
        backgroundColor:'black',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        height:40,
        marginBottom:10

    },
    click:{
        color:'white',
        fontSize:20
    },
    text1:{
        color:'blue',
        fontSize:20
    },
    text2:{
        color:'blue',
        fontSize:20
    }
})

