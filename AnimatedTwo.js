import { View, StyleSheet, Animated,  } from 'react-native'
import React, { useEffect, } from 'react'

const TaskTwo = () => {

    const fontSize = new Animated.Value(0);
    const opacity= new Animated.Value(0);
    const Spin = new Animated.Value(0);

    const Rotating = Spin.interpolate({
        inputRange: [0,0.2,0.4,0.75,1],
        outputRange: ['0deg','144deg','288deg','432deg','720deg'],
      });

    useEffect(()=>{
        Animated.timing(opacity, {
            toValue: 1,
            duration: 2000,
            
          }).start()

          Animated.timing(fontSize, {
            toValue: 80,
            duration: 2000,
           
          }).start()

          Animated.timing(Spin, {
            toValue: 1,
            duration: 2000,
           
          }).start()
        }
    ,[])

  return (

      
      <View style={styles.mainView} >
      <Animated.Text style={{color:'red',
        transform: [{rotate: Rotating}],
        fontSize:fontSize,
       opacity:opacity
    }}>TASK1</Animated.Text>
    </View>

// {/*     
//       <Animated.Text style={{color:'red',
//         transform: [{rotate: Rotating}],
//         fontSize:fontSize,
//        opacity:opacity
//     }}>TASK1</Animated.Text> */}
    
   
    
   

 )
}

const styles = StyleSheet.create({
   SafeMain:{
    flexDirection:'column',
    justifyContent: 'center', 
        alignItems: 'center',
   },
  
  
  
  FirstView:{
    flexDirection:'row',
    justifyContent:'',
   },
  
  
  mainView:{
        flex:1,
        flexDirection:'column',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    
})

export default TaskTwo;