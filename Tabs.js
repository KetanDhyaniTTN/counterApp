import React, { Component } from 'react';
import { Text, View , Image,  StyleSheet,style} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Myntra from './Myntra';
const Tab = createBottomTabNavigator();

class Categories extends Component {
    render() {
      alert('empty');
    }
  }
class Tabs extends Component {
    render() {
        return (
            <NavigationContainer>
               
                <Tab.Navigator >
                    <Tab.Screen name="Men Clothing" component={Myntra}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                                <Image style={styles.img} source={require('./icons8-home-24.png')} />
                            )}}
                    />

                    
                        <Tab.Screen name="Categories" component={Myntra}
                            options={{
                                tabBarLabel: 'Categories',
                                tabBarIcon: ({ colors, size }) => (
                                    <Image style={styles.img} source={require("./cc.png")} />
                                ),
                            }}
                        />

                       
                            <Tab.Screen name="My Cart" component={Myntra}
                                options={{
                                    tabBarLabel: 'My Cart',
                                    tabBarIcon: ({color, size})=>(
                            <Image style={styles.icon} source={require('./sh.png')}/>
                                    ),
                   }}

                   />
                           
                                <Tab.Screen name="Account" component={Myntra}
                                    options={{
                                        tabBarLabel: 'Account',
                                        tabBarIcon: ({color, size})=>(
                                <Image style={styles.icon} source={{uri:'https://cdn-icons-png.flaticon.com/128/709/709579.png'}}/>
                                        ),
                    }}
                    />
                            </Tab.Navigator>
                        </NavigationContainer>
                        );
            
    }
}

                        export default Tabs;



const styles=StyleSheet.create({
    icon:{
        height:25,
        width:25
    }

})



