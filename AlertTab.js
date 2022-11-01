import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import OTP from './OTPScreen'; 
import HomeScreen from './homescreen'; 
import Ticket from "./TicketScreen"; 
import TwitterLogin from "./TwitterLogin";
import ReactAlert from './ReactAlert';
import Clipboard from './Clipboard'
class AlertTab extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="AssignmentOne" component={TwitterLogin} />
                    <Stack.Screen name="AssignmentTwo" component={Ticket} />
                    <Stack.Screen name="AssignmentThree" component={OTP} />
                    <Stack.Screen name="AssignmentAlert" component={ReactAlert} />
                    <Stack.Screen name="Assignment Clipboard" component={Clipboard} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };
}




















export default AlertTab;