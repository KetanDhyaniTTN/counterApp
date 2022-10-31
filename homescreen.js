import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export class Homescreen extends Component {
    render() {
        return (
            <View style={styles.homeButton}>
                <TouchableOpacity style={styles.buttonAssign} 
                    onPress={() => this.props.navigation.navigate("AssignmentOne")} >

                    <Text style={styles.textHome}>AssignmentOne</Text >
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonAssign}
                    onPress={() => this.props.navigation.navigate("AssignmentTwo")} >
                    <Text style={styles.textHome}>AssignmentTwo</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonAssign}
                    onPress={() => this.props.navigation.navigate("AssignmentThree")} >
                    <Text style={styles.textHome}>AssignmentThree</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonAssign}
                    onPress={() => this.props.navigation.navigate("Assignment Alert")} >
                    <Text style={styles.textHome}>AssignmentAlert</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonAssign}
                    onPress={() => this.props.navigation.navigate("Assignment Clipboard")} >
                    <Text style={styles.textHome}>Assignment Clipboard</Text>

                </TouchableOpacity>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    buttonAssign: {
        backgroundColor: "#3457D5",
        borderRadius: 50,
        width: 150,
        marginVertical: 70,
        padding: 8,
        marginHorizontal: 120,
        marginBottom: 5,
        justifyContent: 'center',
    },
    textHome: {
        color: "white",
        textAlign: 'center',
        marginHorizontal: 6.5,
        fontWeight: '600',
    },
    homeButton: {
         flexDirection: 'column',
        
        flex:1,
        backgroundColor:'grey',
        

    },

})
export default Homescreen