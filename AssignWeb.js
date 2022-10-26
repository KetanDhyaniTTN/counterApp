import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from "react-native";


class AssignWeb extends Component {
  ActivityIndicatorElement = () => {
    return (


      <ActivityIndicator style={styles.activityIndicatorStyle}
        color='black'
        size="large" />

    );
  };

  render() {
    return (

      <SafeAreaView style={styles.containerWeb}>
        <WebView
          source={{ uri: 'https://reactnative.dev/' }}

          renderLoading={this.ActivityIndicatorElement}

          startInLoadingState={true}
        />
      </SafeAreaView>

    );

  }
}
const styles = StyleSheet.create({
  containerWeb: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 10,
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
})


export default AssignWeb;




