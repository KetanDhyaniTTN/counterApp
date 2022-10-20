import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
class OTP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbOne: '',
            numbTwo: '',
            numbThree: '',
            numbFour: '',

        }
    }
    render() {
        return (
            
           

                <View>
                <View style={styles.containerHeader}>

                    <Text style={styles.textHeader}>Log into Saavn</Text>

                </View>

                <View style={styles.containerMid}>
                    <Text style={styles.textMid}>Enter your Code</Text>

                    <View style={styles.inputOne}>
                        <TextInput

                            style={styles.inputText}

                            ref={'numbOne'}
                            keyboardType='numeric'
                            autoFocus={true}
                            maxLength={1}


                            onChangeText={(numbOne) => {
                                this.setState({ numbOne: numbOne })

                                if (numbOne != "") {
                                    this.refs.numbTwo.focus();
                                }

                            }
                            }
                        />



                        <TextInput
                            ref={'numbTwo'}
                            keyboardType='numeric'
                            style={styles.inputText}
                            maxLength={1}
                            onChangeText={(numbTwo) => {
                                this.setState({ numbTwo: numbTwo })
                                if (numbTwo != "") {
                                    this.refs.numbThree.focus();
                                }

                            }

                            }
                            onKeyPress={({ nativeEvent }) => {
                                if (
                                    nativeEvent.key === 'Backspace' &&
                                    this.state.numbTwo == '' &&
                                    this.state.numbOne != ''
                                ) {
                                    this.refs.numbOne.focus();
                                    this.setState({ numbOne: '' });
                                }
                            }} />

                        <TextInput
                            ref={'numbThree'}
                            keyboardType='numeric'
                            style={styles.inputText}
                            maxLength={1}

                            onChangeText={(numbThree) => {
                                this.setState({ numbThree: numbThree })
                                if (numbThree != "") {
                                    this.refs.numbFour.focus();
                                }

                            }

                            }
                            onKeyPress={({ nativeEvent }) => {
                                if (
                                    nativeEvent.key === 'Backspace' &&
                                    this.state.numbThree == '' &&
                                    this.state.numbTwo != ''
                                ) {
                                    this.refs.numbTwo.focus();
                                    this.setState({ numbTwo: '' });
                                }
                            }} />



                        <TextInput ref={'numbFour'}
                            keyboardType='numeric'
                            style={styles.inputText}
                            maxLength={1}
                            onChangeText={(numbFour) => {
                                this.setState({ numbFour: numbFour })

                                if (numbFour == "") {

                                    this.refs.numbThree.focus();
                                }

                            }

                            }
                            onKeyPress={({ nativeEvent }) => {
                                if (
                                    nativeEvent.key === 'Backspace' &&
                                    this.state.numbFour == '' &&
                                    this.state.numbThree != ''
                                ) {
                                    this.refs.numbThree.focus();
                                    this.setState({ numbThree: '' });
                                }
                            }}
                        />














                    </View>

                    <View style={styles.continueButton}>
                        <TouchableOpacity style={styles.buttonGreen} >
                            <Text style={styles.textButton}>Continue</Text >

                        </TouchableOpacity>
                    </View>

                </View>
                






           


        );

    };
},
const styles = StyleSheet.create({
    containerHeader: {
        
        backgroundColor: "green",


    },
    textHeader: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
        padding: 10,
    },
    containerMid: {
        // backgroundColor: 'white',
        flexDirection: 'column'
    },
    textMid: {
        fontSize: 20,
        fontWeight: '200',
        color: 'black',
        top: 50,
        textAlign: 'center',
    },
    inputText: {

        height: 50,
        margin: 8,
        width: 50,
        borderWidth: 1,
        borderColor: 'grey',
        top: 100,
        textAlign: 'center',
        borderRadius: 5,
    },


    inputOne: {

        flexDirection: 'row',
        justifyContent: 'center',

    },
    continueButton: {
        flexDirection:'row',
        justifyContent: 'center'
    },   
    buttonGreen: {
        width: 250,
        margin: 12,
        padding: 10,
        borderWidth: 0.5,
        borderColor: 'green',
        borderTopWidth: 1.5,

        top: 180,

    },
    textButton: {
        fontSize: 20,
        fontWeight: '100',
        color: 'green',
        alignSelf: 'center',



    },





})

export default OTP



