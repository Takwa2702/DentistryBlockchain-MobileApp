//create reusable buttons over the application to enhance the coherence of the UI/UX

import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React, {Component} from 'react';
import {Button} from "react-native-elements"; 
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const SignInButton = ({onPress,title, isLoading}) => (
    <Button buttonStyle={styles.signIn} containerStyle={styles.signInContainer}
        title={title}
        onPress={onPress}
        loading={isLoading}
        titleStyle={styles.signInText}
    />
);

const GetStarted = ({onPress,title}) => (
    <Button buttonStyle={styles.signIn} containerStyle={styles.getStartedContainer}
        icon={<Icon name="share" size={20} color="#fff" style={{marginRight: 10}}></Icon>}
        title={title}
        onPress={onPress}
        titleStyle={styles.getStartedText}
    />
);

const AddDocument = ({onPress,title}) => (
    <Button buttonStyle={styles.addDocument} 
        icon={<Icon name="plus" size={14} color="#EB5C5E" style={{marginRight: 5}}></Icon>}
        title={title}
        onPress={onPress}
        titleStyle={styles.addDocumentText}
    />
);

const SortBy = ({onPress,title}) => (
    <Button buttonStyle={styles.sort} 
        icon={<Icon name="filter" size={14} color="#fff" style={{marginRight: 5}}></Icon>}
        title={title}
        onPress={onPress}
        titleStyle={styles.sortText}
    />
);

const ViewDocument =  ({onPress,title}) => (
    <Button buttonStyle={styles.viewDocument} 
        icon={<Icon name="eye" size={14} color="#EB5C5E" style={{marginRight: 5}}></Icon>}
        title={title}
        onPress={onPress}
        titleStyle={styles.addDocumentText}
    />
);

const RemoveDocument = ({onPress,title}) => (
    <Button buttonStyle={styles.sort} 
        icon={<Icon name="trash" size={14} color="#fff" style={{marginRight: 5}}></Icon>}
        title={title}
        onPress={onPress}
        titleStyle={styles.sortText}
    />
);

const Confirm = ({onPress,title, isLoading}) => (
    <Button buttonStyle={styles.confirm} 
        icon={<Icon name="send" size={14} color="#fff" style={{marginRight: 5}}></Icon>}
        title={title}
        onPress={onPress}
        loading={isLoading}
        titleStyle={styles.sortText}
    />
);

const Reject = ({onPress,title}) => (
    <Button buttonStyle={styles.reject} 
        icon={<Icon name="trash" size={14} color="#fff" style={{marginRight: 5}}></Icon>}
        title={title}
        onPress={onPress}
        titleStyle={styles.sortText}
    />
);

const AddItem = ({onPress,title}) => (
    <Button buttonStyle={styles.addItem} 
        icon={<Icon name="plus" size={14} color="#EB5C5E" style={{marginRight: 5}}></Icon>}
        title={title}
        onPress={onPress}
        titleStyle={styles.addDocumentText}
    />
);

const RemovingItem = ({onPress}) => (
    <Button buttonStyle={styles.removeItem} 
        icon={<Icon name="trash" size={14} color="#EB5C5E" ></Icon>}
        onPress={onPress}
        titleStyle={styles.addDocumentText}
    />
);

//=================== styles ===================

const styles = StyleSheet.create({
    //sign in
    signInContainer : {
        width: '100%',
    },
    signIn: {
        backgroundColor: "#222E5F",
        // padding: 15,
        height: 50,
        borderRadius: 4,
        // width: '90%'
    },
    signInText: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center"
    },
    //get started
    getStartedContainer : {
        // width: '30%',
    },
    getStarted: {
        backgroundColor: "#222E5F",
        // padding: 15,
        height: 50,
        borderRadius: 4,
        // width: '90%'
    },
    getStartedText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    //add document
    addDocument: {
        // width: "50%",
        backgroundColor: "#fff",
        // height: 30,
        // borderWidth: 1, 
        // borderColor: "#EB5C5E",
        borderRadius: 4
    },
    addDocumentText: {
        color:  "#EB5C5E",
        fontSize: 14,
        textAlign: "center"
    },
    sort: {
        // width: "50%",
        backgroundColor: "#EB5C5E00",
        // height: 30,
        borderWidth: 1, 
        borderColor: "#fff",
        borderRadius: 4
    },
    sortText: {
        color:  "#fff",
        fontSize: 14,
        textAlign: "center"
    },
    viewDocument: {
        // width: "50%",
        backgroundColor: "#fff",
        // height: 30,
        borderWidth: 1, 
        borderColor: "#EB5C5E",
        borderRadius: 4
    },
    viewDocumentText: {
        color:  "#EB5C5E",
        fontSize: 14,
        textAlign: "center"
    },
    confirm: {
        backgroundColor: "green",
        minWidth: 100,
        marginHorizontal: 5,
        // height: 30,
        // borderWidth: 1, 
        // borderColor: "#EB5C5E",
        borderRadius: 4
    },
    reject: {
        backgroundColor: "red",
        minWidth: 100,
        marginHorizontal: 5,
        // borderWidth: 1, 
        // borderColor: "#EB5C5E",
        borderRadius: 4
    },
    addItem:{
        backgroundColor: "#fff",
        width: 60,
        marginHorizontal: 5,
        borderWidth: 1, 
        borderColor: "#EB5C5E",
        borderRadius: 4
    },
    removeItem: {
        backgroundColor: "#fff",
        width: 40,
        // marginHorizontal: 5,
        borderWidth: 1, 
        borderColor: "#EB5C5E",
        borderRadius: 4
    }

})

export {SignInButton, GetStarted, AddDocument, SortBy, ViewDocument, RemoveDocument, Confirm, Reject, AddItem, RemovingItem};