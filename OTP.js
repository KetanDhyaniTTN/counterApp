import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, Button, TouchableOpacity } from "react-native";
class OTP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: '',
            number2: '',
            number3: '',
            number4: '',

        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.containerHeader}>
                    <SafeAreaView>
                        <Text style={styles.textHeader}>Log into Saavn</Text>
                    </SafeAreaView>

                    <View style={styles.containerMid}>
                        <Text style={styles.textMid}>Enter your Code</Text>

                        <View style={styles.inputOne}>
                            <TextInput
                                // style={styles.inputOne}
                                style={styles.inputText}
                                ref={'number1'}
                                autoFocus={true}
                                maxLength={1}
                                onChangeText={(number1) => {
                                    this.setState({ number1: number1 })
                                    if (number1 != "") {
                                        this.refs.number2.focus();
                                    }
                                    

                                }
                                } />
                            <TextInput 
                                ref={'number2'}
                                
                                style={styles.inputText}
                                maxLength={1}
                                onChangeText={(number2) => {
                                    this.setState({ number2: number2 })
                                    if (number2 != "") {
                                        this.refs.number3.focus();
                                    }
                                    else if( number2==""){  
                                 
                                        this.refs.number1.focus();
                                    }
                                }
                                }/>

                            <TextInput ref={'number3'}
                        
                                style={styles.inputText}
                                maxLength={1}
                                onChangeText={(number3) => {
                                    this.setState({ number3: number3 })
                                    if (number3 != "") {
                                        this.refs.number4.focus();
                                    }
                                    else if( number3==""){   
                                 
                                        this.refs.number2.focus();
                                    }
                                }

                                }/>

                               

                                <TextInput ref={'number4'}
                                style={styles.inputText}
                                maxLength={1}
                                 onChangeText={(number4) => {
                                    this.setState({ number4: number4 })
                                
                                 if(number4==" "){

                                    this.refs.number3.focus();
                                }
                                else if( number4==""){   
                                 
                                    this.refs.number3.focus();
                                }
                            }
                               
                                }  
                                />
                                    
                                
                            

                                
                                 
                           
                              

                                                            




                        </View>
                        <View style={styles.continueButton}>
                            <TouchableOpacity style={styles.buttonGreen} >
                                <Text style={styles.textButton}>Continue</Text >
                            </TouchableOpacity>
                        </View>

                    </View>




                </View>

            </View>

        );

    };
}
const styles = StyleSheet.create({
    containerHeader: {
        // flex: 1,
        backgroundColor: "green",
        // marginBottom:750,


    },
    textHeader: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        //top:20,
        padding: 10,
    },
    containerMid: {
        backgroundColor: 'white',
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
        borderRadius:5,
    },


    inputOne: {
     
        flexDirection: 'row',
        justifyContent: 'center',

    },
    continueButton: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonGreen: {
        height: 40,
        margin: 12,
        width: 250,
        borderWidth: 0.5,
        borderColor: 'green',
        borderTopWidth:1.5,
        
        top:180,

    },
    textButton: {
        fontSize: 20,
        fontWeight:'100',
        color: 'green',
        padding: 10,
        marginHorizontal: 68,
       
        
    },





})

export default OTP



