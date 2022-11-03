import { Component } from 'react';
import {  Text, TouchableOpacity, SafeAreaView, StyleSheet,AsyncStorage } from 'react-native';

 class HomePage extends Component {  
    render () {
        return (
            <SafeAreaView style={style.viewScreen}>
                <TouchableOpacity
                    style={style.buttonLogin}
                    onPress={async() => {
                        
                        const isLoggedIn = await AsyncStorage.getItem('text');
                        

                        if(!isLoggedIn)
                        this.props.navigation.navigate('LoginScreen')
                            else
                            this.props.navigation.navigate('ShowInfo')
                        }}



                >
                    <Text style={style.textLogin}>Login Screen</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
    
}

const style = StyleSheet.create({
    viewScreen: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: "pink",
    },
    buttonLogin: {
        width: 200,
        height: 50,
        backgroundColor: "skyblue",
        borderRadius: 10,
        padding: 13,
    },
    textLogin: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: '600',
    }
}); 
export default HomePage;