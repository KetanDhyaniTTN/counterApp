import React, { useState, useEffect } from 'react';
import {SafeAreaView,StyleSheet,View, Text,TouchableOpacity,TextInput,Clipboard,Alert, BackHandler} from 'react-native';
const MyClipboard = (props) => {

  const [inputOne, setInputOne] = useState('');

  //const [input2, setInput2] = useState('');




  useEffect(() => {

    const backAction = () => {

      Alert.alert("Hold on!", "Are you sure you want to go back?", [

        {

          text: "Cancel",

          onPress: () => null,

          style: "cancel"

        },

        { text: "YES", onPress: () => props.navigation.goBack() },

      ]);

      return true;

    };




    const backHandler = BackHandler.addEventListener(

      "hardwareBackPress",

      backAction

    );

return () => backHandler.remove();

  }, []);


const readFromClipboard = async () => {
    let clipboardContent = await Clipboard.getString();
    alert('Text from Clipboard: ' + clipboardContent);

  };




  const writeToClipboard = async () => {
    Clipboard.setString(inputOne);
    alert('Copied to Clipboard!');

  };




  return (

    <SafeAreaView style={styles.containerMain}>
      <View style={styles.containerCopy}>
        <Text style={styles.titleText}> CLIPBOARD</Text>

        <TextInput style={styles.textInput}
          onChangeText={(input1) => setInputOne(input1)}
          value={inputOne}
          placeholder="Type here" />

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonRed}
            onPress={writeToClipboard}>
            <Text style={styles.buttonText}>Copy to Clipboard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonRed}
            onPress={readFromClipboard}>
            <Text style={styles.buttonText}>Get from Clipboard</Text>
          </TouchableOpacity>
        </View>


      </View>
    </SafeAreaView>

  );

};









const styles = StyleSheet.create({

  containerMain: {
    flex: 1,
    backgroundColor:'pink',
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center'
  },
  containerCopy:{
    flex: 1,
    padding: 10,
    textAlign: 'center',
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center'
  },

  titleText: {
    padding: 8,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',

  },

  titleTextsmall: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 16,
  },

  buttonView: {
    flexDirection: "row",
  },

  buttonRed: {
    justifyContent: 'center',
    marginTop: 15,
    width:150,
    padding: 10,
    backgroundColor: 'red',
    borderRadius:20,
    marginLeft: 20,

  },

  buttonText: {
    color: 'white',
    textAlign: 'center',

  },

  textInput: {
    height: 40,
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,

  },


});
export default MyClipboard;
