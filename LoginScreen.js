import React, { useCallback,  useState } from 'react';
import { View, Text, SafeAreaView,  TouchableOpacity, StyleSheet,  AsyncStorage } from 'react-native';
import Data from './Data';
import Input from './Input'


Login = (props) => {
  const [text, setText] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmpassword: '',
  });

  const _onChangeText = useCallback((value, type) => { setText({...text, [type]:value}) });

  const sendUserInfo = async() => {
    
    try{
      await AsyncStorage.setItem('text', JSON.stringify(text));
      props.navigation.replace('ShowInfo')
    }
    catch(err) {
      console.log(err)
    }
  } 

  return (
    <SafeAreaView style={style.containerScreen}>

      <View style={style.screenView}>

        <View style={style.spaceView} />

        <View style={style.boldView}>
          <Text style={style.textStarted}>Let's Get Started!</Text>
          <Text style={style.textAccount}>Create an account to Q Allure to get all features</Text>
        </View>

        <View style={style.componentView}>
          {Data.map((item, index) => {
            return (
              <Input key={index} changeText={_onChangeText} text={text} index={index} {...item} />
            );
          })}
        </View>

        <View style={style.createView}>
          <TouchableOpacity
            style={style.buttonInfo}
            onPress={sendUserInfo}
          >
            <Text style={style.createText}>CREATE</Text>
          </TouchableOpacity>
        </View>

        <View style={style.bottomView}>
          <Text style={style.accountText}>Already have an account? </Text>
          <Text style={style.loginText}>Login Here</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}



const style = StyleSheet.create({
  containerScreen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#dddd',
    alignItems: 'center',
    padding: 20,

  },
  
  screenView: {
    backgroundColor: 'rgb(250,250,250)',
    borderRadius: 20,

  },
  spaceView: {
    height:80,
  },
  boldView: {
    width: 350,
    height: 90,
  },
  textStarted: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,

  },
  textAccount: {
    fontSize: 14,
    color: 'rgb(159,159,159)',
    textAlign: 'center',
  },
  componentView: {
    paddingVertical: 20,
  },
  createView: {
    height: 50,
    width: 150,
    alignSelf: 'center',
  },
  buttonInfo: {
    alignItems: "center",
    backgroundColor: 'rgb(27,86,200)',
    width: 150,
    height: 60,
    justifyContent: 'center',
    borderRadius: 30,
  },
  createText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bottomView: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 30,
  },
  accountText: {
    color: 'rgb(81,87,93)',
    fontSize: 14,
    //paddingVertical: 20,
  },
  loginText: {
    fontWeight: 'bold',
    color: 'rgb(64,128,244)'
  }
})
export default Login;