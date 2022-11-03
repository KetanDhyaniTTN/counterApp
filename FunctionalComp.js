import { SafeAreaView, Text, FlatList, View, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useState, useRef, useCallback } from "react";




const DATA = [
  {
    id: 101,
    imageUrl: 'https://source.unsplash.com/1600x900/?beach',
  },
  {
    id: 102,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 103,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 104,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 105,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 106,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 107,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 108,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 109,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 110,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 111,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 112,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 113,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 114,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 115,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 116,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 117,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 118,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 119,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 120,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 121,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 122,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 123,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 124,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 125,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 126,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 127,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 128,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 129,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 130,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 131,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 132,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 133,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 134,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 135,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 136,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 137,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 138,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 139,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
  {
    id: 140,
    imageUrl: 'https://source.unsplash.com/1600x900/?random',
  },
];


const FunctionalComp = () => {
  const [value, setvalue] = useState('')
  let newRef = useRef(null)
  const [button, setbutton] = useState('false')

  const imageSize = useCallback(((_,index) => (
    { length: 247, offset: 247 * index, index }
  )))

  const endButton = () => {
    setbutton(true);
  }

  let FindOut = () => {
    const id = DATA.findIndex((items) => items.id === value);
    newRef.scrollToIndex({
      index: id,
    })
  }
  const scrolling = ({ contentOffset }) => {
    console.log(contentOffset.y);
    return contentOffset.y <= 9614
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.topView}>
        <TextInput
          style={styles.inputOne}
          onChangeText={(value) => { setvalue(parseInt(value)) }}
        />
        <TouchableOpacity style={styles.buttonGo} onPress={FindOut}>
          <Text style={styles.textButton}>Go</Text>
        </TouchableOpacity>
      </View>



      <FlatList
        ref={(ref) => { newRef = ref }}
        style={styles.flatView}
        data={DATA}
        getItemLayout={imageSize}
        onEndReached={endButton}
        onScroll={({ nativeEvent }) => {
          if (scrolling(nativeEvent)) {
            setbutton(false)
          }

        }}
        renderItem={({ item }) => {
          return (

            <View style={styles.midFlat}>
              <View style={styles.firstView}>
                <Text
                  style={styles.itemId}>{item.id}
                </Text>
              </View>
              <View style={styles.imageView}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.imageflat}
                />
              </View>
            </View>

          )
        }
        }


      />

      {button && <TouchableOpacity style={styles.buttonBottom} onPress={() => {
        newRef.scrollToIndex({
          index: 0,
          animted: true,
          viewPosition: 1,
        })
      }}>

        <Text style={styles.buttonText}>Back to top</Text>
      </TouchableOpacity>}


    </SafeAreaView>
  );
  ;
};
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'skyblue'
  },

  topView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  flatView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',

  },
  midFlat: {
    backgroundColor: 'purple',
    margin: 10,
    justifyContent: 'center',
    borderRadius: 20,
  },
  firstView: {
    paddingVertical: 10,
    fontSize: 15,
    color: 'black',
    textAlign: 'center'
  },
  itemId: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white'
  },

  imageflat: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },

  buttonBottom: {
    position: 'absolute',
    bottom: 33,
    left: 70,
    backgroundColor: 'grey',
    width: 250,
    height: 50,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    padding: 15,
  },

  buttonGo: {
    height: 30,
    width: 50,
    backgroundColor: 'red',
    marginTop: 15,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    padding: 3,

  },
  inputOne: {
    height: 40,
    margin: 10,
    width: 250,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default FunctionalComp;