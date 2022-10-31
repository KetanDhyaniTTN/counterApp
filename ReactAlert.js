import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, } from 'react-native';


class App extends Component {
  backButtonAlert = () => {
    Alert.alert(
      "Continue",
      "Please select your Response",
      [
        {
          text: "Cancel",
          onPress: () => null,

        },
        {
          text: "OK",
          onPress: () => this.props.navigation.goBack(),
        }
      ]
    );
  }
  render() {
    return (
      <View style={styles.containerMain}>
        <TouchableOpacity style={styles.buttonAssign}
          onPress={this.backButtonAlert}>
          <Text style={styles.textHome}>BackButtonAlert</Text>

        </TouchableOpacity>



      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: "center",

  },
  buttonAssign: {
    backgroundColor: "#3457D5",
    borderRadius: 50,
    width: 170,
    padding: 20,
    height: 60,
    marginLeft: 110,
    justifyContent: 'center',
  },
  textHome: {
    fontSize: 18,
    fontWeight: '200',
    color: 'white',
  }

});














export default App;




