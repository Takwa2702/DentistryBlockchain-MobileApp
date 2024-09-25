import React , {useState, useEffect} from "react";
import { View , StyleSheet, Text, ImageBackground, StatusBar, Image, FlatList, ScrollView, RefreshControl} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {SafeAreaView} from "react-native-safe-area-context";
import {i18n} from "../nls";

Icon.loadFont();

const IssuesScreen = ({navigation}) => {


    

    //vaiables and functions 
    const [patientData, setPatientData] = useState({}); 
    //fetch the patients data from the api and store them

    //on screen start we call the api


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
                <ImageBackground source={require('../../../assets/dark-blue-background.png')} resizeMode="cover" style={styles.headerImage}>

            <View style={styles.body}>
                <View style={styles.card}>
                </View>
            </View>
            
            </ImageBackground>
    </View>

    )
}

//home style
const styles = StyleSheet.create({
    container: {
        flex: 3,
    },
    header: {
        backgroundColor: "#ffffff00",
        paddingHorizontal: 20,
        marginTop: 40
    },
    headerImage: {
        flex: 1,
    },
    body: {
        zIndex: 5,
        backgroundColor: "#ffffff00",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 20,
        flex: 1

    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 2,
        marginBottom: 100
    },
})


export default IssuesScreen;