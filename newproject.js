import * as React from 'react';
import { View, Text,} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OTPScreen from './OTPScreen'; 
import HomeScreen from './homescreen'; 
import TicketScreen from "./TicketScreen"; 
import TwitterLogin from "./TwitterLogin";
//import  AsyncStorage  from './AsyncStorage';
import LoginScreen from './LoginScreen';
import ShowInfo from './ShowInfo';
import HomePage from './HomePage';
import { Component } from 'react/cjs/react.production.min';
const Stack = createNativeStackNavigator();

 class newproject extends Component{
    render() {
        return (
            <NavigationContainer>
              <Stack.Navigator>
               <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="AssignmentOne" component={TwitterLogin} />
               <Stack.Screen name="AssignmentTwo" component={TicketScreen} />
               <Stack.Screen name="AssignmentThree" component={OTPScreen} /> 
               <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
               <Stack.Screen name="ShowInfo" component={ShowInfo} /> 
               <Stack.Screen name="HomePage" component={HomePage} /> 
                </Stack.Navigator>
            </NavigationContainer>
           );
    }
}
export default newproject






