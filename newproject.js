import * as React from 'react';
import { View, Text,  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OTP from './OTP'; 
import HomeScreen from './homescreen'; 
import Ticket from "./Ticket"; 
import TwitterLogin from "./TwitterLogin";
import { Component } from 'react/cjs/react.production.min';

const Stack = createNativeStackNavigator();

 class newproject extends Component{
    render() {
        return (
            <NavigationContainer>
              <Stack.Navigator>
               <Stack.Screen name="HomeScreen" component={HomeScreen}  />
                <Stack.Screen name="AssignmentOne" component={TwitterLogin} />
               <Stack.Screen name="AssignmentTwo" component={Ticket} />
               <Stack.Screen name="AssignmentThree" component={OTP} /> 
              </Stack.Navigator>
            </NavigationContainer>
           );
    }
}
export default newproject






