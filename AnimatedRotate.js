import {  View, Animated, StyleSheet, Dimensions } from 'react-native'
import React, { Component } from 'react'
class RotateTask extends Component {

    constructor() {
        super();
        this.state = {
            xAxis: new Animated.Value(0),
            yAxis: new Animated.Value(0),
            xAxisOne: new Animated.Value(0),
            yAxisOne: new Animated.Value(0),
            xAxisTwo: new Animated.Value(0),
            yAxisTwo: new Animated.Value(0),
            xAxisThree: new Animated.Value(0),
            yAxisThree: new Animated.Value(0),
            fadeText: new Animated.Value(0),
            TextSpin: new Animated.Value(0),
        };
    }

    widthScreen = Dimensions.get('screen').width;

    heightScreen = Dimensions.get('screen').height;

    

    componentDidMount = () => {

        Animated.loop(Animated.timing(this.state.xAxis, {
            toValue: this.widthScreen - 133,
            duration: 5000,
            useNativeDriver: false
        })).start();

        Animated.loop(Animated.timing(this.state.yAxis, {
            toValue: this.heightScreen - 160,
            duration: 5000,
            useNativeDriver: false
        })).start();

        Animated.loop(Animated.timing(this.state.xAxisOne, {
            toValue: -this.widthScreen + 140,
            duration: 5000,
            useNativeDriver: false,
        })).start();

        Animated.loop(Animated.timing(this.state.yAxisOne, {
            toValue: this.heightScreen - 160,
            duration: 5000,
            useNativeDriver: false
        })).start();

        Animated.loop(Animated.timing(this.state.xAxisTwo, {
            toValue: this.widthScreen-143,
            duration: 5000,
            useNativeDriver: false,
        })).start();

        Animated.loop(Animated.timing(this.state.yAxisTwo, {
            toValue: -this.heightScreen+155,
            duration: 5000,
            useNativeDriver: false
        })).start();

        Animated.loop(Animated.timing(this.state.xAxisThree, {
            toValue: -this.widthScreen+143,
            duration: 5000,
            useNativeDriver: false,
        })).start();

        Animated.loop(Animated.timing(this.state.yAxisThree, {
            toValue: -this.heightScreen+155,
            duration: 5000,
            useNativeDriver: false
        })).start();

       Animated.loop(Animated.timing(this.state.fadeText, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false
        })).start();

        Animated.loop(Animated.timing(this.state.TextSpin, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false
        })).start();
    }


    render() {
        return (
            <View style={styles.containerRotate}>
              <Animated.View style={[styles.textOne,{ opacity: this.state.fadeText }]}>
                    <Animated.Text style={[styles.texts, {
                        transform: [
                            { translateX: this.state.xAxis },
                            { translateY: this.state.yAxis },
                            {
                                rotate: this.state.TextSpin.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '2520deg'],
                                })
                            },

                        ]
                    }]}>
                        Task 1
                    </Animated.Text>
                </Animated.View>

                <Animated.View style={[styles.textTwo,{ opacity: this.state.fadeText }]}>
                    <Animated.Text style={[styles.texts, {
                        transform: [
                            { translateX: this.state.xAxisOne },
                            { translateY: this.state.yAxisOne },
                            {
                                rotate: this.state.TextSpin.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '2520deg'],
                                })
                            },

                        ]
                    }]}>
                        Task 2
                    </Animated.Text>
                </Animated.View>

                <Animated.View style={[styles.textThree,{ opacity: this.state.fadeText }]}>
                    <Animated.Text style={[styles.texts, {
                        transform: [
                            { translateX: this.state.xAxisTwo },
                            { translateY: this.state.yAxisTwo },
                            {
                                rotate: this.state.TextSpin.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '2520deg'],
                                })
                            },
                        ]
                    }]}>
                        Task 3
                    </Animated.Text>
                </Animated.View>

                <Animated.View style={[styles.textFour,{ opacity: this.state.fadeText }]}>
                    <Animated.Text style={[styles.texts, {
                        transform: [
                            { translateX: this.state.xAxisThree },
                            { translateY: this.state.yAxisThree },
                            {
                                rotate: this.state.TextSpin.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '2520deg'],
                                })
                            },
                        ]
                    }]}>
                        Task 4
                    </Animated.Text>
                </Animated.View> 
                </View>
        )
    }
}

const styles = StyleSheet.create({
    containerRotate: {
        flex: 1,
    },
    textOne:{
        position:'absolute',
        left:0,
    },
    textTwo:{
        position:'absolute',
        right:0,
    },
    textThree:{
        position:'absolute',
        bottom:10,
        left:3,
    },
    textFour:{
        position:'absolute',
        bottom:10,
        right:3,
    },
    texts: {
        color: 'red',
        fontSize: 45,
        fontWeight:'500'
    },
});
export default RotateTask;