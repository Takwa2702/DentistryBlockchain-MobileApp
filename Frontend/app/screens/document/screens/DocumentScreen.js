import React , {useState, useEffect} from "react";
import { View , StyleSheet, Text, ImageBackground, StatusBar, Image, FlatList, ScrollView, RefreshControl} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {SafeAreaView} from "react-native-safe-area-context";
import {i18n} from "../nls";

Icon.loadFont();

const DocumentScreen = ({navigation}) => {


    

    //vaiables and functions 
    const [patientData, setPatientData] = useState({}); 
    //fetch the patients data from the api and store them

    //on screen start we call the api


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
                <ImageBackground source={require('../../../assets/dark-blue-background.png')} resizeMode="cover" style={styles.headerImage}>

            <View style={styles.header}>
                <View style={styles.welcomeCard}>
                    <Text style={styles.userTitle}>{i18n.newDoc.title}</Text>
                        
                    <Text style={styles.userSubtitle}>{i18n.newDoc.title}</Text>
                </View>
            </View>

            <View style={styles.body}>
            
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
    welcomeCard: {
        // flex: 0.50,
        paddingHorizontal: 0,
        paddingVertical: 5,
        backgroundColor: "transparent", 
        // backgroundColor: "#fff", 
        borderRadius: 4,
        
    },
    userTitle: {
        color: "#fff",
        fontSize: 25, 
        fontWeight: "bold",
    },
    userSubtitle: {
        marginTop: 5, 
        fontSize: 16,
        color: "#fff"
    },
})


export default DocumentScreen;