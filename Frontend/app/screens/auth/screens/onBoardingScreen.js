import React from "react";
import {View, Text, StyleSheet, StatusBar, ImageBackground , SafeAreaView} from "react-native";
import * as Animatable from 'react-native-animatable';
import {GetStarted} from "../../../components/bottons";
import {i18n} from "../nls";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const OnBoardingScreen = ({navigation}) => {

    const insets = useSafeAreaInsets();
    insets.top = 10;
    insets.bottom = 0;
    // go to sign In screen
    const onGetStarted = ()=> {
        console.log("get started is clicked");
        navigation.navigate('SignInScreen');
    } 

    return (
        <SafeAreaView  style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="dark-content"/>
        {/* body content */}
        <Animatable.View animation="slideInUp"
            duraton="1500" style={styles.headerContent}>
        <Text style={styles.welcome}>{i18n.onBoarding.title}</Text>
            <Text style={styles.welcomeSubtitle}>{i18n.onBoarding.subTitle}</Text>
        </Animatable.View>
            <View style={styles.button}>
                <GetStarted title={i18n.onBoarding.btnTitle} onPress={()=> onGetStarted()}/>
          </View>
        <Animatable.View animation="pulse"
            duraton="1500" style={styles.body}> 
            <ImageBackground source={require('../../../assets/onboarding3x.png') } resizeMode="cover" style={styles.ImageBody}>
            </ImageBackground>
        </Animatable.View>
    </SafeAreaView >
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: "flex-start",
        color: "#222E5f",
        paddingBottom: 0
      },
      headerContent: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
      },
      body: {
        flex: 1, 
      },    
      ImageBody: {
        flex:1, 
        width: "116%", 
        height: "120%", 
        marginLeft: -120,
        marginBottom: -200,
      },    
    welcome: {
        alignSelf: "flex-start",
        color: '#222E5f',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10
    },
    welcomeSubtitle: {
        alignSelf:"flex-start",
        color: "#222E5f",
        fontSize: 16,
        marginBottom: 5,
        marginTop: 10,
    },
    button: {
        alignItems: "flex-end",
        marginTop: 20,
        width: "90%",
        // marginBottom: -40
    },
    
  });


export default OnBoardingScreen;