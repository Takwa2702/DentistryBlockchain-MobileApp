import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./Auth/AuthStack";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from "./tabs";
import {useSelector} from "react-redux";

const isSignedIn  = true;

const Main = () => {
  
    const logInState = useSelector(state => state.isLoggedIn);
    console.log("login state", logInState);
    return (
      <NavigationContainer>
        {logInState.isLoggedIn? 
        <Tabs />: <AuthStack />}
      </NavigationContainer>
  );
};

export default Main; 