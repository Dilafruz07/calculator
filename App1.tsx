import React from 'react';
import {  Button, SafeAreaView, StyleSheet, Text, TouchableOpacity,Pressable, TouchableOpacityBase} from 'react-native';

export function App(){
    let count=5;
    const foo =() =>{
        count+=10;
        console.log(count);
    };
    return(
        <SafeAreaView style={styles.main}>
            <Text style={styles.text}>{count}</Text>
            <TouchableOpacity style={styles.button} onPress={foo} >
                <Text style={styles.click}>Click</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity>
                <Text style={styles.text1}>Artim</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.text2}>Azalma</Text>
            </TouchableOpacity> */}
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
        color:'aqua',
        fontSize:50,
        fontWeight:'bold'
    },
    button:{
        width:'80%',
        backgroundColor:'black',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        height:40
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

