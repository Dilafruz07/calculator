import React,{useState} from 'react';
import {  Button, SafeAreaView, StyleSheet, Text, TouchableOpacity,Pressable, TouchableOpacityBase} from 'react-native';

import {New} from './New';
export function App(){
    const [num,setCount] =useState(0);    
    const [isVisiable,setIsVisiable]=useState(false)                              
    const artim= ()=>{
        setCount(num+1);
        if(num>15){
            setIsVisiable(true);
        }
    };
    const azalma=()=>{
        setCount(num-1);
        if(num<15){
            setIsVisiable(false);
        }
    };
    return(
        <SafeAreaView style={styles.main}>
            <New/>
            <Text style={styles.text}>{num}</Text>
            <TouchableOpacity style={styles.button} onPress={artim} >
                <Text style={styles.click}>art</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={azalma} >
                <Text style={styles.click}>azal</Text>
            </TouchableOpacity>
            {isVisiable? <Text style={styles.text}>nice</Text> : null}
            {/* {count>10 ? <Text style={styles.text}>GREAT</Text> : null} */}
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

