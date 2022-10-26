import * as React from 'react';
import { View, Text,  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AssignWeb from './AssignWeb';
import homeScreen from './homescreen'; 
import Slider  from   './Slider';
import { Component } from 'react/cjs/react.production.min';
import SectionQue from './SectionQue';
const Stack = createNativeStackNavigator();

 class WebTab extends Component{
    render() {
        return (
            <NavigationContainer>
              <Stack.Navigator>
               <Stack.Screen name="HomeScreen" component={homeScreen}/>
                <Stack.Screen name="AssignmentOne" component={AssignWeb} />
               <Stack.Screen name="AssignmentTwo" component={Slider} />
               <Stack.Screen name="AssignmentThree" component={SectionQue} /> 
              </Stack.Navigator>
            </NavigationContainer>
           );
    }
}













export default WebTab;







