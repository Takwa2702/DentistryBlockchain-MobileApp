import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {DocumentScreen} from "../../screens/document"; 


const DocStackNav = createStackNavigator(); 

const DocStack = ({navigation}) => {
    return (
    <DocStackNav.Navigator screenOptions={{ headerShown: false }}>
        <DocStackNav.Screen name="document" component={DocumentScreen}/>
    </DocStackNav.Navigator>
    );
};

export default DocStack; 