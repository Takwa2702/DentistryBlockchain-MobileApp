import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {SignInScreen, OnBoardingScreen} from "../../screens/auth"; 
import {HomeScreen} from "../../screens/home";

import Tabs from "../tabs";

const AuthStackNav = createStackNavigator(); 

const AuthStack = ({navigation}) => {
    return (
    <AuthStackNav.Navigator screenOptions={{ headerShown: false }}>
        <AuthStackNav.Screen name="OnBoardingScreen" component={OnBoardingScreen}/>
        <AuthStackNav.Screen name="SignInScreen" component={SignInScreen}/>
        {/* <AuthStackNav.Screen name="HomeScreen"  component={Tabs} /> */}
    </AuthStackNav.Navigator>
    );
};

export default AuthStack; 