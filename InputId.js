import React, { Component } from "react";
import {  Text,TextInput, StyleSheet, SafeAreaView,TouchableOpacity} from "react-native";
import { useState } from "react";

const textInput = () => {
    const [text, onChangeText] = useState("Type Here");
   
    return (
      <SafeAreaView style={styles.mainView}>
        <TextInput
          style={styles.inputOne}
          onChangeText={onChangeText}
          value={text}
        />
        <TouchableOpacity style={styles.buttonGo}>
        <Text style={styles.textButton}>Go</Text>
        </TouchableOpacity>
          
        
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    mainView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'skyblue'
    },
    buttonGo:{
        height:30,
        width:50,
        backgroundColor:'red',
        marginTop:15,
        borderRadius:10,
    },
    textButton:{
        fontSize:18,
        color:'white',
        textAlign:'center',
        padding:3,

    },


inputOne: {
      height: 40,
      margin: 10,
      width:250,
      borderWidth: 1,
      padding: 10,
      backgroundColor:'white',
      borderRadius:10,
    },
  });
  
  export default textInput;