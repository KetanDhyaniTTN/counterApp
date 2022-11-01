import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';
class MySlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderValue: 50,
            switchValue: false,
        };
    }
    render() {
        return (
            <SafeAreaView style={styles.containerMain}>
               
                <View style={styles.switchView}>
                <Text style={styles.textSwitch}>Switch</Text>
                    <Switch
                        color={this.state.switchValue ? "white" : "red"}
                        value={this.state.switchValue}
                        ios_backgroundColor='blue'
                        onValueChange={(switchValue) => this.setState({ switchValue })}
                    />
                </View>


                {this.state.switchValue ?
                    <Slider
                        maximumValue={100} minimumValue={0} step={1}
                        value={this.state.sliderValue}
                        onValueChange={sliderValue => this.setState({ sliderValue })}
                    /> : ''}

                {this.state.switchValue && <Text style={{ textAlign: 'center', color: 'red' }}>
                    {this.state.sliderValue}
                </Text>}

            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor:'pink'
    
      
    },
    textSwitch: {
        fontSize: 25,
        fontWeight: '200',
        textAlign:'center',
      
        
    },
    switchView:{
       justifyContent:'center',
       alignItems:'center',
       marginTop:50
    },
    





});
export default MySlider;
