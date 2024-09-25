import React , {useEffect, useState} from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Avatar, Overlay, Button} from "react-native-elements";
import {View, Text, StyleSheet} from "react-native";
import {PatientsScreen, IssuesScreen, MedicinesScreen, DocumentScreen} from "../screens/document";
import {useSelector, useDispatch} from "react-redux";
import {docActions} from "../storage/actions";
import {coreApi} from "../api";
import {RemoveDocument , Confirm, Reject} from "../components/bottons";


const Tab = createMaterialTopTabNavigator();

const TopTabs = ()=> {

   const dispatch = useDispatch(); 
   //mode is on
   const mode = useSelector(state => state.mode);
   const token = useSelector(state => state.token);
   const userInfo = useSelector(state => state.userInfo);
   const docInfo = useSelector(state => state.docInfo);

   const setDocInfo = doc => dispatch(docActions.setDocInfo(doc)); 


   const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
    setVisible(!visible);
    };
   //api call to create a new document and save its details
   useEffect(()=> {

   })
   
  const getTime = (mil)=> {
    let date = new Date(mil);
    return date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
  }

  const onDelete = () => {
      //open a model 
      toggleOverlay();

  }

  return (
    <View style={styles.container}>
        <View style={styles.welcomeCard}>
        {mode.docMode? <View><Text style={styles.title}>New Patient Document </Text>
  <Text style={styles.subTitle}>Created at {getTime(docInfo.docInfo.createdDate)} </Text></View>: 
  <View style={styles.oldWelcomeCard}>
      <Avatar size="large" rounded source={{uri:docInfo.docInfo.patientDetails.imageURL}} title="NP" />  
      <View style={{marginLeft: 10, flexGrow: 1}}>
      <Text style={styles.title}>{docInfo.docInfo.patientDetails.firstName ? docInfo.docInfo.patientDetails.firstName + " " + docInfo.docInfo.patientDetails.lastName : "New Patient"}</Text>
      <Text style={styles.values}>Created at {getTime(docInfo.docInfo.createdDate)} </Text>
      {/* <Text style={styles.values}>Last modified at {getTime(docInfo.docInfo.modifiedDate)} </Text> */}
      </View>
      <RemoveDocument title="Remove" onPress={() => onDelete()}/>
      </View>}
        </View>
    <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: "#222E5F"}, tabBarLabelStyle:{ color: "#fff"}, tabBarItemStyle:{borderBottomColor: "#fff"}}}>
    {/* <Tab.Screen name="Document" component={DocumentScreen} /> */}
      <Tab.Screen name="Patient" component={PatientsScreen} />
      <Tab.Screen name="Medicines" component={MedicinesScreen} />
      <Tab.Screen name="Issues" component={IssuesScreen} />
      {/* <Tab.Screen name="Diagnosis" component={IssuesScreen} /> */}
    </Tab.Navigator>

    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={styles.overlay}>
            <Text style={{fontSize: 18, color: "#000", alignSelf: "center", marginBottom: 20, fontWeight: "bold"}}>Confirmation</Text>
            <Text>Are you sure that you want to remove the pateint's document?</Text>
            <View style={{flexDirection: "row", justifyContent: "flex-end", padding: 10}}>
            <Reject title="No" onPress={()=> toggleOverlay()}/><Confirm title="Yes" />
            </View>
        </View>
      </Overlay>
    </View>
  );
}

export default TopTabs;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222E5F",
        paddingTop: 30
    },
    title: {
        color: "#fff",
        fontSize: 16, 
        fontWeight: "bold",
    },
    subTitle: {
        marginTop: 5, 
        fontSize: 12,
        color: "#fff"
    },
    values: {
        marginTop: 5, 
        fontSize: 12,
        color: "#fff"
    },
    welcomeCard: {
        padding: 20
    },
    oldWelcomeCard: {
        flexDirection: "row",
        // paddingHorizontal: 20
    },
    overlay: {
        padding: 20,
        // flex: 1, 
        // alignItems: "center"
    }
})