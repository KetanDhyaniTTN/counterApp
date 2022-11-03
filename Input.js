import React, { useState } from 'react';
import { View,  TextInput, Image, StyleSheet } from 'react-native';

const Input = ({image, placeholder, index, changeText,type}) => {
    
    return (
        <View key={index} style={style.componentView}>
            <View style={style.imageView}>
                <Image
                    style={style.logo}
                    source={{ uri: image }}
                />
            </View>

            <TextInput
                style={style.textinput}
                placeholder={placeholder}
                onChangeText={(value) => changeText(value, type)}
            ></TextInput>

        </View>
    );
}

const style = StyleSheet.create({
    componentView: {
        flexDirection: 'row',
        borderRadius: 30,
        width: 320,
        height: 60,
        padding: 20,
        alignSelf: 'center',
        marginBottom: 15,
        backgroundColor: 'rgb(255,255,255)',
    },
    imageView: {
        width: 18,
        height: 18,
        marginHorizontal: 10,
    },
    logo: {
        height: '100%',
        width: '100%',
    },
    textinput: {
        fontSize: 16,
    }
})
export default Input;