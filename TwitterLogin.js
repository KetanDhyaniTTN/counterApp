import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity,Image } from "react-native";


class TwitterLogin extends Component {
  render() {
    return (



      <View style={styles.headerImage}>
          <Image
          style={styles.imageTwit}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1024px-Twitter-logo.svg.png?20220821125553' }} />
        
        <SafeAreaView>
          <View style={styles.mainText}>
            <Text style={styles.mainIntro}>See what's happening in the world right now.</Text>

          </View>
          <View style={styles.continueGoogle}>
            <TouchableOpacity style={styles.buttonGoogle} >
              <Text style={styles.textButton}>Continue with Google</Text >
              <Image
                        style={styles.imageGoogle}
                        source={{ uri: 'https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg' }} />
            </TouchableOpacity>
          </View>
          <View style={styles.createAccount}>
            <TouchableOpacity style={styles.buttonAccount} >
              <Text style={styles.textAccount}>Create account</Text >

            </TouchableOpacity>
          </View>
          <View style={styles.logDes}>
            <Text style={styles.signdes}>By signing up, you agree to our Terms,Privacy Policy,and Cookies Use</Text>
          </View>
          <View style={styles.logIn}>
            <Text style={styles.logText}>Have a account already? Log in</Text>
          </View>
        </SafeAreaView>

      </View>








    )
  }

}
const styles = StyleSheet.create({
  headerImage: {
    flex: 1,
    backgroundColor: "black",

  },
  imageTwit: {
    width: 28,
    height: 25,
    top: 40,
    marginLeft:180,
    
    
    
  },
  mainText: {
    backgroundColor: 'black',
    marginTop: 80,
    padding: 70,
    flexDirection: 'row',
   
    
  },
  mainIntro: {
    fontSize: 35,
    fontWeight: '700',
    color: 'white',
    top: 30,
    marginLeft:10,
  },
  continueGoogle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonGoogle: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 2.5,
    borderColor: 'white',
    borderRadius: 100,
    backgroundColor: 'white',
    top: 50,

  },
  imageGoogle:{
   height:25,
   width:25,
   bottom:23,
   marginLeft:50,
  

  },
  textButton: {
    fontSize: 15,
    marginLeft: 80,
    marginTop: 10,
    fontWeight: '700'
  },

  createAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonAccount: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 2.5,
    borderColor: 'white',
    borderRadius: 100,
    backgroundColor: 'white',
    top: 80,

  },
  textAccount: {
    fontSize: 15,
    marginLeft: 90,
    marginTop: 10,
    fontWeight: '700',
  },
  logDes: {
    backgroundColor: 'black',
    marginTop: 130,
    padding: 20,
    flexDirection: 'row',
    marginLeft: 20,

  },
  signdes: {
    fontSize: 14,
    marginLeft: 10,
    fontWeight: '300',
    color: 'white',
    bottom: 50,
  },
  logIn: {
    flexDirection: 'row',

  },
  logText: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',

    marginLeft: 50,

  }

}
)







export default TwitterLogin;