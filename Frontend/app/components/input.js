import {StyleSheet} from "react-native";
import React from "react";
import {Input} from "react-native-elements";
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();


// email input field 
const EmailInput = ({title, onChange}) => (
    <Input
    placeholder={title}
    onChangeText={onChange}
    containerStyle={styles.container}
    inputContainerStyle={styles.inputContainer}
    inputStyle={styles.text}
    leftIcon={<Icon name="mail" size={18} color="#5D84C3"></Icon>}
    labelStyle={styles.mainText}
/>
) 

// password input field
const PassInput = ({title, onChange}) => (
    <Input
    placeholder={title}
    onChangeText={onChange}
    containerStyle={styles.container}
    inputContainerStyle={styles.inputContainer}
    inputStyle={styles.text}
    leftIcon={<Icon name="lock" size={18} color="#5D84C3"></Icon>}
    labelStyle={styles.text}
    secureTextEntry={true}
/>
) 

const SearchInput = ({title, onChange}) => (
    <Input
    placeholder={title}
    onChangeText={onChange}
    containerStyle={styles.searchContainer}
    inputContainerStyle={styles.inputContainer}
    inputStyle={styles.text}
    leftIcon={<Icon name="search" size={18} color="#EB5C5E"></Icon>}
    labelStyle={styles.mainText}
/>
) 

// email input field 
const CommonInput = ({title, onChange}) => (
    <Input
    placeholder={title}
    onChangeText={onChange}
    containerStyle={styles.commonContainer}
    inputContainerStyle={styles.inputContainer}
    inputStyle={styles.text}
    labelStyle={styles.mainText}
/>
) 

const styles = StyleSheet.create({
    //password input
    inputContainer: {
        borderBottomWidth: 0,
    },
    container: {
        marginTop:10,
        borderWidth: 1, 
        height: 50,
        borderRadius: 4,
        backgroundColor: "#fff",
        borderColor: "#5D84C3",
        width: "90%",
        paddingLeft: 15
    },
    text: {
        fontSize: 14,
        marginLeft: 10,
        color: "#222E5F"
    },
    searchContainer: {
        marginTop:10,
        // borderWidth: 1, 
        height: 50,
        borderRadius: 4,
        backgroundColor: "#fff",
        // borderColor: "#EB5C5E",
        width: "100%",
        paddingLeft: 15
    },
    commonContainer: {
        marginTop:10,
        borderWidth: 1, 
        height: 45,
        borderRadius: 4,
        backgroundColor: "#fff",
        borderColor: "#5D84C3",
        width: "100%",
        paddingLeft: 15
    }

}); 

export {PassInput, EmailInput, SearchInput, CommonInput};