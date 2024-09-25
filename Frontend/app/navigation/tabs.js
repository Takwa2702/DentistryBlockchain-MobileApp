import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import {Text, StyleSheet, TouchableOpacity} from "react-native";
import {HomeScreen} from "../screens/home"; 
import {DocumentScreen} from "../screens/document";
import {OnBoardingScreen,SignInScreen} from "../screens/auth";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native-animatable';
import DocStack from "./Document/DocumentStack";
import TopTabs from "./topTab";

Icon.loadFont();

const Tab = createBottomTabNavigator();

const Tabs =()=> {
  return (
    <Tab.Navigator screenOptions={{ 
        headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 20, 
            right: 20,
            backgroundColor: "#fff",
            borderRadius: 15,
            height: 90,
            // paddingTop: 20,
            hadowColor: "#000",
            shadowColor: "#000",
            shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        }
        }} >
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({focused}) => (<View style={{flex:1, justifyContent: "center", alignItems: "center"}}><Icon name="home" size={25} color={focused ? "#222E5f": "#5D84C3"}></Icon>
          <Text style={{color:focused ? "#222E5f": "#5D84C3", marginTop: 5}}>Home</Text></View>)
      }} />
      <Tab.Screen name="New Document" component={TopTabs} options={{
          tabBarIcon: ({focused}) => (<TouchableOpacity><View style={{flex:1, justifyContent: "center", alignItems: "center"}}><Icon name="file" size={22} color={focused ? "#222E5f": "#5D84C3"}></Icon>
          <Text style={{color:focused ? "#222E5f": "#5D84C3", marginTop: 5}}>Requests</Text></View></TouchableOpacity>)
      }} />
      <Tab.Screen name="Profile" component={SignInScreen} options={{
          tabBarIcon: ({focused}) => (<View style={{flex:1, justifyContent: "center", alignItems: "center"}}><Icon name="user" size={25} color={focused ? "#222E5f": "#5D84C3"}></Icon>
          <Text style={{color:focused ? "#222E5f": "#5D84C3", marginTop: 5}}>Profile</Text></View>)
      }} />
      {/* <Tab.Screen name="Settings" component={SignInScreen} /> */}
    </Tab.Navigator>
  );
}

export default Tabs;

const styles = StyleSheet.create({
    icon: {

    }
})