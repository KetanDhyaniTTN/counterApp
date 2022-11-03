import React, {  useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Alert, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';

export default ShowInfo = (props) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        getInfo();
    }, []);

    const getInfo = async () => {
        try {
            const value = await AsyncStorage.getItem('text');

            if (value !== null) {
                setUserData(JSON.parse(value));
            }
        } catch (e) {
            console.error(e);
        }
    }

    const clearInfo = async () => {
        try {
            await AsyncStorage.clear();
            props.navigation.replace('LoginScreen')
        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        Alert.alert('Alert', 'Are you sure you want to logout?', [
            {
                text: 'NO',
                onPress: () => '',
            },
            {
                text: 'YES',
                onPress: () => { clearInfo() },
            },
        ]);
    };
    return (
        <SafeAreaView>
            <View style={style.mainView}>
                <Text style={style.text}>Name: {userData.name}</Text>
                <Text style={style.text}>Email: {userData.email}</Text>
                <Text style={style.text}>Contact No: {userData.contact}</Text>
            </View>
            <View >
                <TouchableOpacity onPress={logout}>
                    <Text style={style.text}>Log Out</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}
const style=StyleSheet.create({
   mainView:{
    flexDirection:'column',
    justifyContent:'space-evenly',
    
   },
   text:{
    fontSize:20,
   },
   
})