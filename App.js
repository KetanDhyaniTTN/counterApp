import React, {useState} from 'react';
import {View, Text, SafeAreaView,Button ,StyleSheet} from 'react-native';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    if (this.state.count >= 0 && this.state.count < 10) {
      this.setState({count: this.state.count + 1});
    }
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({count: this.state.count - 1});
    }
  };
  Reset = () => {
    this.setState({count: (this.state.count = 0)});
  };
  render() {
    return (
      <SafeAreaView>
        <View style={styles.wrap}>
          <View style={styles.counter}>
            <Button title="+" onPress={this.increment} />
            
            <Text style={{fontSize: 70}}>{this.state.count}</Text>
            <Button title="-" onPress={this.decrement} />
          </View>
          <Button title="Press here" onPress={this.Reset} />
          
            
        </View>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  
});

export default App;