import react, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
export default class Myntra extends Component {
  render() {
    return (

      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.headerCont}>
            <View style={styles.headerLeftCont}>
              <Text style={styles.itemsText}>195 items</Text>
            </View>
            <View style={styles.headerRightCont}>
              <View style={styles.sortCont}>
                <Image style={styles.img} source={require('/Users/ketandhyani/Desktop/counterApp/icons8-sort-32.png')} />
                <Text style={styles.sortFilterText}>SORT</Text>
              </View>
              <View style={styles.verticalLine}></View>
              <View style={styles.filterCont}>
                <Image style={styles.img} source={require('/Users/ketandhyani/Desktop/counterApp/icons8-filter-32.png')} />
                <Text style={styles.sortFilterText}>FILTER</Text>
              </View>
            </View>
          </View>

          <View style={styles.buttonMid}>
            <TouchableOpacity style={styles.buttonType}>
              <Text style={styles.textButton}>Polo Shirts</Text >
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonType}>

              <Text style={styles.textButton}>Dress Shirts</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonType}>

              <Text style={styles.textButton}>Shorts</Text>

            </TouchableOpacity>
          </View>


          <View style={styles.imageViewone}>
            <View style={styles.productOne}>
              <Image
                style={styles.imageOne}
                source={{ uri: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/6383140/2018/10/30/c043b40c-5f1b-41b1-92d1-5df6513e93971540895194327-Roadster-Men-Navy-Blue-Solid-Sweatshirt-9201540895194125-1.jpg' }} />
              <Text style={styles.textTitle}>Tommy Hilfiger</Text >
              <Text style={styles.textDes}>Men's Morrison Type Polo,</Text>
              <Text style={styles.textDesTwo}>LimeLight Combo</Text>
              <Text style={styles.textLast}>USD 23</Text>
            </View>

            <View style={styles.productTwo}>
              <Image
                style={styles.imageOne}
                source={{ uri: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/6383140/2018/10/30/c043b40c-5f1b-41b1-92d1-5df6513e93971540895194327-Roadster-Men-Navy-Blue-Solid-Sweatshirt-9201540895194125-1.jpg' }} />
              <Text style={styles.textTitle}>Tommy Hilfiger</Text >
              <Text style={styles.textDes}>Men's Morrison Type Polo,</Text>
              <Text style={styles.textDesTwo}>LimeLight Combo</Text>
              <Text style={styles.textLast}>USD 23</Text>
            </View>
          </View>




          <View style={styles.imageViewTwo}>
            <View style={styles.productOne}>
              <Image
                style={styles.imageOne}
                source={{ uri: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/6383140/2018/10/30/c043b40c-5f1b-41b1-92d1-5df6513e93971540895194327-Roadster-Men-Navy-Blue-Solid-Sweatshirt-9201540895194125-1.jpg' }} />
              <Text style={styles.textTitle}>Tommy Hilfiger</Text >
              <Text style={styles.textDes}>Men's Morrison Type Polo,</Text>
              <Text style={styles.textDesTwo}>LimeLight Combo</Text>
              <Text style={styles.textLast}>USD 23</Text>
            </View>

            <View style={styles.productTwo}>
              <Image
                style={styles.imageOne}
                source={{ uri: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/6383140/2018/10/30/c043b40c-5f1b-41b1-92d1-5df6513e93971540895194327-Roadster-Men-Navy-Blue-Solid-Sweatshirt-9201540895194125-1.jpg' }} />
              <Text style={styles.textTitle}>Tommy Hilfiger</Text >
              <Text style={styles.textDes}>Men's Morrison Type Polo,</Text>
              <Text style={styles.textDesTwo}>LimeLight Combo</Text>
              <Text style={styles.textLast}>USD 23</Text>
            </View>
          </View>


        </ScrollView>
      </SafeAreaView>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
  },
  headerCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: 15,
    paddingVertical: 10,
    backgroundColor:'white'

  },
  headerLeftCont: {
    borderRadius: 10,
    width: '50%',
  },
  headerRightCont: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-evenly'

  },

  img: {
    width: 20,
    height: 20,
    marginHorizontal: 2
  },

  verticalLine: {
    borderWidth: 1
  },

  sortCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },

  filterCont: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  sortFilterText: {
    marginHorizontal: 5
  },



  buttonMid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginTop: 10,
    height: 75,
    backgroundColor: 'white',
   




  },
  buttonType: {
    backgroundColor: "#F0F0F0",
    justifyContent: 'center',
    height: 45,
    borderRadius: 9,
    width: 100,
    margin: 10,


  },
  textButton: {
    marginHorizontal: 10,
    textAlign: 'center'
  },
  imageViewone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,

  },
  imageOne: {
    height: 310,
    width: 170,

  },
  imageTwo: {
    height: 310,
    width: 170,

  },
  productOne: {
    flexDirection: 'column',
    justifyContent: 'flex-start',

  },
  textTitle: {
    top: 10,
    fontSize: 16,
  },

  textDes: {
    top: 10,
    fontSize: 12,
    fontWeight: '300',
  },
  textDesTwo: {
    top: 12,
    fontSize: 12,
    fontWeight: '300',
  },
  textLast: {
    fontSize: 20,
    top: 15,
  },
  imageViewTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 50,
  },

}

)


