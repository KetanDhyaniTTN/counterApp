import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

class App extends Component {
    render() {
        return (
            <View style={styles.Viewhead}>
                <SafeAreaView>
                   <Text style={styles.ViewText}>My name is Ketan</Text> 
                </SafeAreaView>
            </View>

            


           






        );
    }
}
const styles = StyleSheet.create({
    Viewhead: {
        backgroundColor: 'magenta',
        
       
        
       


    },
    ViewText: {
        fontSize: 20,
        color: 'white',
        textAlign:'center',
        
       

       
    },
    // Midview:{
    //     backgroundColor:'red',
    //     flexDirection:'row',
    //     marginTop:20,
        
    // }


})

export default App;

