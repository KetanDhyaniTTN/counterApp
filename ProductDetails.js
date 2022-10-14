import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity } from "react-native";

class ProductDetails extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.ContainerHeader} >
                    <Image
                        style={styles.ImageBack}
                        source={{ uri: 'https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png' }} />
                    <Image
                        style={styles.ImageSaved}
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2956/2956783.png' }} />


                    <Text style={styles.TextHeader}>ProductDetails</Text>
                </View>
                <View style={styles.ContainerMain}>
                    <Image
                        style={styles.ImageMain}

                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/f/fd/How_to_Train_Your_Dragon_3_poster.png' }} />
                    <Text style={styles.MovieTitle}> How To Train YourDragon The Hidden World</Text>

                    <Text style={styles.MovieTitle}>Part III </Text>

                    <View style={styles.ContainerButton}>
                        <TouchableOpacity style={styles.ButtonBlue} >
                            <Text style={styles.TextButton} >Adventure</Text >
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.ButtonBlue}>
                            <Text style={styles.TextButton} >Family</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ButtonBlue}>
                            <Text style={styles.TextButton} >Fantasy</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.InfoMovie}>
                        <Text style={styles.InfoHead}>Year</Text>
                        <Text style={styles.InfoHead}>Country</Text>
                        <Text style={styles.InfoHead}>Length</Text>
                    </View>
                    <View style={styles.FillInfo}>
                        <Text style={styles.InsertInfo}>2019</Text>
                        <Text style={styles.InsertInfo}>USA</Text>
                        <Text style={styles.InsertInfo}>112 min</Text>
                    </View>
                    <View style={styles.AboutMovie}>
                        <Text style={styles.AboutMovie}>About Movie</Text>
                    </View>
                    <View style={styles.DescripMovie}>
                        <Text style={styles.DescripMovie}>When Hiccups discovers Toothless isn't the only night fury,he must seek 'The Hidden World',a secret dragon utopia before a hired tryant named grimmal find it first </Text>
                    </View>
                    <View>
                        <Text style={styles.ScreenshotTxt}>
                            Screenshots
                        </Text>
                    </View>
                    <View style={styles.ScreenshotView}>

                        <ScrollView horizontal={true}>
                            <Image
                                style={styles.ImageScreenshot}
                                source={{ uri: 'https://images.hdqwalls.com/wallpapers/bthumb/hiccup-how-to-train-your-dragon-3-2019-mq.jpg' }} />
                            <Image
                                style={styles.ImageScreenshot}
                                source={{ uri: 'https://images.hdqwalls.com/wallpapers/bthumb/hiccup-how-to-train-your-dragon-3-2019-mq.jpg' }} />
                        </ScrollView>
                        <View style={styles.Ticket}>
                            <TouchableOpacity style={styles.ButtonTicket} >
                                <Text style={styles.BuyTicket}>   BUYTICKET</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </ScrollView >





        );

    };
}


const styles = StyleSheet.create({
    ContainerHeader: {
        flex: 1,
        backgroundColor: "white",
       
        alignItems: "center",
        justifyContent: 'center',
        padding: 1,
        fontWeight: '200',
        flexDirection: 'column',


    },
    TextHeader: {

        fontSize: 20,
        fontWeight: '200',
        color: "black",
        marginBottom: 1,

        marginVertical: 1,
    },


    ImageBack: {
        width: 32,
        height: 32,
        top: 60,
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 310,
        marginTop: 5,
        justifyContent: 'space-between',
        marginVertical: 1,
    },
    ImageSaved: {
        width: 30,
        height: 32,
        top: 22,
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 310,
        marginTop: 5,
        justifyContent: 'space-between',
        marginVertical: 1,

    },

    ImageMain: {
        width: 230,
        height: 300,
        marginLeft: 80,
        // marginRight:250,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        border: 0,
        borderRadius: 18,

    },
    ContainerMain: {
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor:'#FAF9F6'
    },
    MovieTitle: {
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

    ButtonBlue: {

        backgroundColor: "#1877F2",
        padding: 17,
        borderRadius: 100,
        width: '30%',
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 2,
        flexDirection: "row",
        textAlign: 'center',
    },
    TextButton: {
        color: "white",
        textAlign: 'center',
        marginHorizontal: 6.5,
        fontWeight: '600',
    },
    ContainerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        backgroundColor:'#FAF9F6',


    },
    
    InfoMovie: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 50,
        borderTopWidth:0.5,
        borderTopColor:'grey',
    },

    FillInfo: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 1,
        backgroundColor:'#FAF9F6',

    },


    InfoHead: {

        backgroundColor:'#FAF9F6',
        alignItems: "center",
        fontWeight: '100',
        justifyContent: 'center',
        padding: 20,
        paddingBottom: 3,
        flexDirection: 'row',
    },

    InsertInfo: {
        backgroundColor:'#FAF9F6',
        alignItems: "center",
        justifyContent: 'center',
        padding: 5,
        flexDirection: 'row',
        marginTop: 2,
        fontWeight: '300',
    },
    AboutMovie: {
        fontWeight: '300',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 2,
        fontSize: 15,
    },
    DescripMovie: {
        fontWeight: '100',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        justifyContent: "space-around",
        

    },
    ScreenshotView: {
        flexDirection: "column",
        justifyContent: "space-around",
        fontSize: 25,
        backgroundColor:'white',
    },
    ImageScreenshot: {
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
    ScreenshotTxt: {
        fontSize: 15,
        marginBottom: 15,
        marginHorizontal: 20,
        fontWeight: '300',

    },
    Ticket: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 50,
    },
    ButtonTicket: {
        backgroundColor: "#1877F2",
        padding: 10,
        borderRadius: 4,
        paddingHorizontal: 15,
        marginHorizontal: 20,
        flexDirection: "column",
        marginBottom: 80,
        alignItems: "center",
    },
    BuyTicket: {
        color: "white",
        textAlign: 'center',
        marginHorizontal: 50,
        marginLeft: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },

});
export default ProductDetails;