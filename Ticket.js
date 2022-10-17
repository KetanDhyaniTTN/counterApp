import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity } from "react-native";

class ProductDetails extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.containerHeader} >
                    <Image
                        style={styles.imageBack}
                        source={{ uri: 'https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png' }} />
                    <Image
                        style={styles.imageSaved}
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2956/2956783.png' }} />


                    <Text style={styles.textHeader}>ProductDetails</Text>
                </View>
                <View style={styles.containerMain}>
                    <Image
                        style={styles.imageMain}

                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/f/fd/How_to_Train_Your_Dragon_3_poster.png' }} />
                    <Text style={styles.movieTitle}> How To Train YourDragon The Hidden World</Text>

                    <Text style={styles.movieTitlebot}>Part III </Text>

                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.buttonBlue} >
                            <Text style={styles.textButton}>Adventure</Text >
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonBlue}>
                            <Text style={styles.textButton}>Family</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonBlue}>
                            <Text style={styles.textButton}>Fantasy</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoMovie}>
                        <Text style={styles.infoHead}>Year</Text>
                        <Text style={styles.infoHead}>Country</Text>
                        <Text style={styles.infoHead}>Length</Text>
                    </View>
                    <View style={styles.fillInfo}>
                        <Text style={styles.insertInfo}>2019</Text>
                        <Text style={styles.insertInfo}>USA</Text>
                        <Text style={styles.insertInfo}>112 min</Text>
                    </View>
                    <View style={styles.aboutMovie}>
                        <Text style={styles.aboutMovie}>About Movie</Text>
                    </View>
                    <View style={styles.descripMovie}>
                        <Text style={styles.descripMovie}>When Hiccups discovers Toothless isn't the only night fury,he must seek 'The Hidden World',a secret dragon utopia before a hired tryant named grimmal find it first </Text>
                    </View>
                    <View>
                        <Text style={styles.screenshotTxt}>
                            Screenshots
                        </Text>
                    </View>
                    <View style={styles.screenshotView}>

                        <ScrollView horizontal={true}>
                            <Image
                                style={styles.imageScreenshot}
                                source={{ uri: 'https://images.hdqwalls.com/wallpapers/bthumb/hiccup-how-to-train-your-dragon-3-2019-mq.jpg' }} />
                            <Image
                                style={styles.imageScreenshot}
                                source={{ uri: 'https://images.hdqwalls.com/wallpapers/bthumb/hiccup-how-to-train-your-dragon-3-2019-mq.jpg' }} />
                                <Image
                                style={styles.imageScreenshot}
                                source={{uri:'https://imageio.forbes.com/blogs-images/danidiplacido/files/2019/02/dragon3.jpg?format=jpg&width=960'}}/>
                        </ScrollView>
                        <View style={styles.ticket}>
                            <TouchableOpacity style={styles.buttonTicket} >
                                <Text style={styles.buyTicket}>BUY TICKET</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </ScrollView >





        );

    };
}


const styles = StyleSheet.create({
    containerHeader: {
        flex: 1,
        backgroundColor: "white",
       
        alignItems: "center",
        justifyContent: 'center',
        padding: 1,
        fontWeight: '200',
        flexDirection: 'column',


    },
    textHeader: {
        bottom:5,
        fontSize: 18,
        fontWeight: '200',
        color: "black",
      },


    imageBack: {
        width: 22,
        height: 15,
        top: 40,
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 310,
        marginTop: 1,
        justifyContent: 'space-between',
        marginVertical: 1,
    },
    imageSaved: {
        width: 15,
        height: 20,
        top: 15,
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 310,
        marginTop: 5,
        justifyContent: 'space-between',
        marginVertical: 1,

    },

    imageMain: {
        width: 230,
        height: 380,
        marginLeft: 80,
        // marginRight:250,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
     
        borderRadius: 18,

    },
    containerMain: {
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor:'#FAF9F6',
     
    },
    movieTitle: {
        top: 20,
        padding: 10,
        fontSize: 18,
        fontWeight: '300',
        color: "black",
        // alignItems: "center",
        // justifyContent: "center",
        marginLeft: 30,
        flexDirection: 'row',
        width: "80%",
        textAlign: 'center',


    },
movieTitlebot:{
    top: 10,
    padding: 10,
    fontSize: 18,
    fontWeight: '100',
    color: "black",
    marginLeft: 30,
    flexDirection: 'row',
    width: "80%",
    textAlign: 'center',
},
    buttonBlue: {

        backgroundColor: "#1F75FE",
        padding: 20,
        borderRadius: 50,
        width: '30%',
        marginTop: 1,
        paddingHorizontal: 5,
        paddingVertical: 8,
        marginHorizontal: 2,
       justifyContent: 'center',
    },
    textButton: {
        color: "white",
        textAlign: 'center',
        marginHorizontal: 6.5,
        fontWeight: '600',
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        backgroundColor:'#FAF9F6',
        margin:30,


    },
    
    infoMovie: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 50,
       
        
        
    },

    fillInfo: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 1,
        backgroundColor:'#FAF9F6',

    },


    infoHead: {

        backgroundColor:'#FAF9F6',
        alignItems: "center",
        fontWeight: '100',
        justifyContent: 'center',
        padding: 30,
        paddingBottom: 2,
        flexDirection: 'row',
        
    },

    insertInfo: {
        backgroundColor:'#FAF9F6',
        alignItems: "center",
        justifyContent: 'center',
        padding: 5,
        flexDirection: 'row',
        fontWeight: '300',
    },
    aboutMovie: {
        fontWeight: '300',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 2,
        fontSize: 15,
    },
    descripMovie: {
        fontWeight: '100',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        justifyContent: "space-around",
        

    },
    screenshotView: {
        flexDirection: "column",
        justifyContent: "space-around",
        fontSize: 25,
        backgroundColor:'white',
    },
    imageScreenshot: {
        width: 175,
        height: 120,
        marginLeft: 11,
        marginRight: 3,
        backgroundColor:'white',

        borderRadius: 8,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    screenshotTxt: {
        fontSize: 15,
        marginBottom: 15,
        marginHorizontal: 20,
        fontWeight: '300',

    },
    ticket: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 50,
    },
    buttonTicket: {
        backgroundColor: "#1F75FE",
        padding: 10,
        borderRadius: 4,
        paddingHorizontal: 15,
        marginHorizontal: 20,
        flexDirection: "row",
        marginBottom: 80,
        alignItems: "center",
    },
    buyTicket: {
        color: "white",
        textAlign: 'center',
        marginHorizontal: 80,
        marginLeft: 90,
        paddingHorizontal: 30,
        justifyContent: 'center',
    },

});
export default ProductDetails;