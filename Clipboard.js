// import { Text, StyleSheet, View, TouchableOpacity, Clipboard, TextInput } from 'react-native'
// import React, { Component } from 'react';


// export default class MyClipboard extends Component {
//   state = {
//     inputValue: ''
//   }
//   copyClipboard = () => {
//     Clipboard.setString(this.state.inputValue);
//   }

//   render() {
//     return (
//       <View style={styles.containerMain}>
//         <TextInput style={styles.inputText}
//           onChangeText={(inputValue) => this.setState({ inputValue })}>
//         </TextInput>

//         <TouchableOpacity onPress={this.copyClipboard} style={styles.buttonClip}>
//           <Text style={styles.buttonText}>Copy Data to Clipboard</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.buttonFetch}
//           onPress={() => this.props.navigation.navigate('FetchClipboardData')}>
//           <Text style={styles.pressText}>Press here</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   containerMain: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonClip: {
//     backgroundColor: 'pink',
//     height: 30,
//     width: 200,
//     alignItems: 'center',
//     marginBottom: 10,
//     borderRadius: 20,
//   },
//   buttonText: {
//     fontSize: 15,
//     textAlign: 'center',
//     marginTop: 5,
//   },

//   inputText: {
//     height: 40,
//     width: 250,
//     borderWidth: 3,
//     borderColor: 'grey',
//     marginBottom: 30
//   },
//   buttonFetch: {
//     width: 150,
//     height: 30,
//     backgroundColor: 'powderblue',
//     borderRadius: 20,


//   },
//   pressText: {
//     fontSize: 15,
//     textAlign: 'center',
//     marginTop: 5,
//   },

// })


// import React, { useState,useEffect } from 'react';







// import {

//   SafeAreaView,

//   StyleSheet,

//   View,

//   Text,

//   TouchableOpacity,

//   TextInput,

//   Clipboard,

//   Alert,BackHandler

// } from 'react-native';










// const Alerts = (props) => {

//   const [input1, setInput1] = useState('');

//   const [input2, setInput2] = useState('');




//   useEffect(() => {

//     const backAction = () => {

//       Alert.alert("Hold on!", "Are you sure you want to go back?", [

//         {

//           text: "Cancel",

//           onPress: () => null,

//           style: "cancel"

//         },

//         { text: "YES", onPress: () => props.navigation.goBack() },

//       ]);

//       return true;

//     };




//     const backHandler = BackHandler.addEventListener(

//       "hardwareBackPress",

//       backAction

//     );




//     return () => backHandler.remove();

//   }, []);












//   const readFromClipboard = async () => {

//     //To get the text from clipboard

//     let clipboardContent = await Clipboard.getString();

//     alert('Text from Clipboard: ' + clipboardContent);

//   };




//   const writeToClipboard = async () => {

//     //To copy the text to clipboard

//     Clipboard.setString(input1);

//     alert('Copied to Clipboard!');

//   };




//   return (

//     <SafeAreaView style={styles.container}>

//       <View style={styles.container}>

//         <Text style={styles.titleText}>

//          CLIPBOARD

//         </Text>

//         <TextInput

//           style={styles.textInput}

//           onChangeText={(input1) => setInput1(input1)}

//           value={input1}

//           placeholder="Type here"

//         />

//         <View style={styles.button}>

//           <TouchableOpacity

//             activeOpacity={0.7}

//             style={styles.buttonStyle}

//             onPress={writeToClipboard}>

//             {/* Clicking on button will show the rating as an alert */}

//             <Text style={styles.buttonTextStyle}>Copy to Clipboard</Text>

//           </TouchableOpacity>

//           <TouchableOpacity

//             activeOpacity={0.7}

//             style={styles.buttonStyle}

//             onPress={readFromClipboard}>

//             {/* Clicking on button will show the rating as an alert */}

//             <Text style={styles.buttonTextStyle}>Get from Clipboard</Text>

//           </TouchableOpacity>

//         </View>












//       </View>

//     </SafeAreaView>

//   );

// };




// export default Alerts;




// const styles = StyleSheet.create({

//   container: {

//     flex: 1,

//     // backgroundColor:"blue",

//     padding: 10,

//     textAlign: 'center',

//   },

//   titleText: {

//     padding: 8,

//     fontSize: 22,

//     textAlign: 'center',

//     fontWeight: 'bold',

//   },

//   titleTextsmall: {

//     textAlign: 'center',

//     marginVertical: 8,

//     fontSize: 16,

//   },

//   button:{

//     flexDirection:"row"




//   },

//   buttonStyle: {

//     justifyContent: 'center',

//     marginTop: 15,

//     width: '50%',

//     padding: 10,

//     backgroundColor: 'red',

//     marginRight: 2,

//     marginLeft: 2,

//   },

//   buttonTextStyle: {

//     color: 'white',

//     textAlign: 'center',

//   },

//   textInput: {

//     height: 40,

//     borderWidth: 1,

//     width: '100%',

//     paddingHorizontal: 10,

//   },

//   // lineStyle: {

//   //   color: 'black',

//   //   borderWidth: 2,

//   //   margin: 10,

//   // },

// import React, { useState,useEffect } from 'react';







// import {

//   SafeAreaView,

//   StyleSheet,

//   View,

//   Text,

//   TouchableOpacity,

//   TextInput,

//   Clipboard,

//   Alert,BackHandler

// } from 'react-native';










// const Alerts = (props) => {

//   const [input1, setInput1] = useState('');

//   const [input2, setInput2] = useState('');




//   useEffect(() => {

//     const backAction = () => {

//       Alert.alert("Hold on!", "Are you sure you want to go back?", [

//         {

//           text: "Cancel",

//           onPress: () => null,

//           style: "cancel"

//         },

//         { text: "YES", onPress: () => props.navigation.goBack() },

//       ]);

//       return true;

//     };




//     const backHandler = BackHandler.addEventListener(

//       "hardwareBackPress",

//       backAction

//     );




//     return () => backHandler.remove();

//   }, []);












//   const readFromClipboard = async () => {

//     //To get the text from clipboard

//     let clipboardContent = await Clipboard.getString();

//     alert('Text from Clipboard: ' + clipboardContent);

//   };




//   const writeToClipboard = async () => {

//     //To copy the text to clipboard

//     Clipboard.setString(input1);

//     alert('Copied to Clipboard!');

//   };




//   return (

//     <SafeAreaView style={styles.container}>

//       <View style={styles.container}>

//         <Text style={styles.titleText}>

//          CLIPBOARD

//         </Text>

//         <TextInput

//           style={styles.textInput}

//           onChangeText={(input1) => setInput1(input1)}

//           value={input1}

//           placeholder="Type here"

//         />

//         <View style={styles.button}>

//           <TouchableOpacity

//             activeOpacity={0.7}

//             style={styles.buttonStyle}

//             onPress={writeToClipboard}>

//             {/* Clicking on button will show the rating as an alert */}

//             <Text style={styles.buttonTextStyle}>Copy to Clipboard</Text>

//           </TouchableOpacity>

//           <TouchableOpacity

//             activeOpacity={0.7}

//             style={styles.buttonStyle}

//             onPress={readFromClipboard}>

//             {/* Clicking on button will show the rating as an alert */}

//             <Text style={styles.buttonTextStyle}>Get from Clipboard</Text>

//           </TouchableOpacity>

//         </View>












//       </View>

//     </SafeAreaView>

//   );

// };




// export default Alerts;




// const styles = StyleSheet.create({

//   container: {

//     flex: 1,

//     // backgroundColor:"blue",

//     padding: 10,

//     textAlign: 'center',

//   },

//   titleText: {

//     padding: 8,

//     fontSize: 22,

//     textAlign: 'center',

//     fontWeight: 'bold',

//   },

//   titleTextsmall: {

//     textAlign: 'center',

//     marginVertical: 8,

//     fontSize: 16,

//   },

//   button:{

//     flexDirection:"row"




//   },

//   buttonStyle: {

//     justifyContent: 'center',

//     marginTop: 15,

//     width: '50%',

//     padding: 10,

//     backgroundColor: 'red',

//     marginRight: 2,

//     marginLeft: 2,

//   },

//   buttonTextStyle: {

//     color: 'white',

//     textAlign: 'center',

//   },

//   textInput: {

//     height: 40,

//     borderWidth: 1,

//     width: '100%',

//     paddingHorizontal: 10,

//   },

//   // lineStyle: {

//   //   color: 'black',

//   //   borderWidth: 2,

//   //   margin: 10,

//   // },

import React, { useState, useEffect } from 'react';







import {

  SafeAreaView,

  StyleSheet,

  View,

  Text,

  TouchableOpacity,

  TextInput,

  Clipboard,

  Alert, BackHandler

} from 'react-native';










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
