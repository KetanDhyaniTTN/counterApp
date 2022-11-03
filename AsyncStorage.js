// import { useState,useEffect } from "react";
// import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Image,AsyncStorage} from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Storage=()=>{
//     const [data,setdata] =useState({
//         name:'',
//         email:'',
//         phone:'',
//         password:'',
//         })

//         async function GetData() {
//             try {
//                 const value = await AsyncStorage.getItem('userDetails');
                
//                 if(value !== null) {
//                     setSavedData(JSON.parse(data));
//                 }
//               } catch(e) {
//                 console.error(e);
//               }
//           }
//           useEffect(() => {
//             GetData();
//           }, []);

   
    
//         const onchangebottom=async()=>{
//             await AsyncStorage.setItem('userInfo',JSON.stringify(data))
//             navigation.navigate('InputComponent')
//          }

//          const onchangetextholder = () => {

//          }

    
  

//      return (
//             <SafeAreaView style={styles.belowSafeArea}>
//                 <View style={styles.boldView}>
//                     <Text style={styles.boldText}>Let's Get Started!</Text>
//                 </View>
//                 <View style={styles.midView}>
//                     <Text style={styles.midText}>Create an account to Q Allure to get all features</Text>
//                 </View>

//                 <View style={styles.fiveButton}>

//                     <View style={styles.images}>
//                         <Image style={styles.img} source={require('./images/icons8-name-tag-24.png')} />
//                         <TextInput style={styles.button}
//                             placeholder={'Name'} 
//                             name= 'name'
//                             onChangeText={onchangetextholder}/>
//                     </View>

//                     <View style={styles.images}>
//                         <Image style={styles.img} source={require('./images/icons8-envelope-24.png')} />
//                         <TextInput style={styles.button}
//                             placeholder={'email'}
//                             onChangeText={onchangetextholder} />
//                     </View>

//                     <View style={styles.images}>
//                         <Image style={styles.img} source={require('./images/icons8-smartphone-30.png')} />
//                         <TextInput style={styles.button}
//                             placeholder={'Phone'}
//                             onChangeText={onchangetextholder} />
//                     </View>

//                     <View style={styles.images}>
//                         <Image style={styles.img} source={require('./images/icons8-lock-16.png')} />
//                         <TextInput style={styles.button}
//                             placeholder={'Password'}
//                             onChangeText={onchangetextholder}/>
//                     </View>

//                     <View style={styles.images}>
//                         <Image style={styles.img} source={require('./images/icons8-open-lock-16.png')} />
//                         <TextInput style={styles.button}
//                             placeholder={'Confirm Password'} 
//                             onChangeText={onchangetextholder}/>
//                     </View>

//                 </View>

//                 <View style={styles.createButton}>
//                     <TouchableOpacity style={styles.buttonCreate}>
//                     {/* onPress={() => this.props.navigation.navigate("")}  */}
//                         <Text style={styles.textCreate}>Create</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={styles.bottomView}>
//                     <Text style={styles.outerText}>
//                         Already have an account?
//                         <Text style={styles.innerText}>Log here</Text>
//                     </Text>
//                 </View>
//             </SafeAreaView>
//         )}
// export default Storage;

    

// const styles = StyleSheet.create({
//     belowSafeArea: {
//         //borderWidth: 1,
//         flex: 1,
//         flexDirection: 'column',
//         borderRadius: 20,
//         margin: 25,
//         // backgroundColor:'grey'
//     },
//     boldView: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         // backgroundColor:'grey',
//         marginTop: 30,
//         // borderWidth: 1,
//     },
//     boldText: {
//         fontSize: 25,
//         fontWeight: '700'
//     },
//     midView: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 20,

//     },
//     midText: {
//         fontSize: 15,
//         fontWeight: '200'
//     },
//     fiveButton: {
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         marginVertical: 10,
// },
//     createButton: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         //backgroundColor:'red'
//     },
//     buttonCreate: {
//         height: 60,
//         width: 180,
//         borderColor: 'rgb(27,85,200)',
//         borderRadius: 40,
//         borderWidth: 2,
//         // marginTop: 30,
//         backgroundColor: 'rgb(27,85,200)'
//     },
//     textCreate: {
//         color: 'white',
//         fontSize: 25,
//         textAlign: 'center',
//         // marginLeft:40,
//         marginTop: 12,
//         fontWeight: '700'
//     },
//     bottomView: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 20,
//     },
//     outerText: {
//         fontSize: 16,
//         fontWeight: '400'
//     },
//     innerText: {
//         fontSize: 15,
//         color: 'rgb(27,85,200)',
//         fontWeight: '700'
//     },
//     images: {
//         flexDirection: 'row',
//         borderWidth: 2,
//         borderRadius: 30,
//         padding: 8,
//         marginBottom: 40,

//     },
//     img: {
//         marginHorizontal: 10,
//         height: 20,
//         width: 20,
//         marginTop: 5,
//     },
//     button: {
//         width: 220,
//         height: 30,


//     }



// })
























