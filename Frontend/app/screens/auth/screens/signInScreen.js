import React from "react";
import {authApi} from "../../../api";
import {View, Text, Button, Dimensions, StyleSheet, Image, StatusBar, TextInput, ImageBackground} from "react-native";
import * as Animatable from 'react-native-animatable';
import {SignInButton} from "../../../components/bottons";
import {PassInput, EmailInput} from "../../../components/input";
import {i18n} from "../nls";
import {Context} from "../../../storage";
import {useSafeAreaInsets, SafeAreaView} from "react-native-safe-area-context";

//redux 
import { useSelector, useDispatch} from "react-redux";
import { authActions} from "../../../storage/actions";

const SignInScreen = ({navigation}) => {

    const insets = useSafeAreaInsets();
    insets.top = 10;

    // inputs data
    const [data, setData] = React.useState({
        email: "",
        password: "",
    }); 

    const dispatch = useDispatch();

    const setToken = token => dispatch(authActions.updateToken(token));
    const setLoginStatus = boolean => dispatch(authActions.updateLogStatus(boolean));
    const setUserInfo = info => dispatch(authActions.updateUserInfo(info));

    const [signing, setSigning] = React.useState(false);

    const [authError, setAuthError] = React.useState(false)
    //email event
    const handleEmailChange = (val) => {
        setData({
            ...data,
            email: val
        })
    }
    //password event
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        }); 
    }
    //user presses on sign in button
    const onSignIn = async () => {
        setSigning(true);
        let res = await authApi.signIn({email: data.email, password: data.password}); 
        setSigning(false);
        if(res.success) {
            //store the token a
            setToken(res.data[0].accessToken);
            //store the userInfo 
            setUserInfo(res.data[0].userDetails);
            //login status 
            setLoginStatus(true);

            setAuthError(false);
        }else {
            //show error
            setAuthError(true)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="dark-content"/>
        <Animatable.Image 
            animation="slideInUp"
            duraton="1500"
            source={require('../../../assets/sharjah-uni.png')}
            style={styles.mainLogo}
            />
        
        {/* body content */}
        <View style={{flex:1, width: "100%", height: "100%"}}> 
        <ImageBackground source={require('../../../assets/signIn.png') } resizeMode="cover" style={styles.ImageBody}>
            
            <View style={styles.body}>
                <Text style={styles.welcome}>{i18n.signIn.title}</Text>
                <Text style={styles.welcomeSubtitle}>{i18n.signIn.subTitle}</Text>

                <EmailInput title="Email" onChange={(val)=> handleEmailChange(val)}/>
                <PassInput title="Password" onChange={(val) => handlePasswordChange(val)}/>

                {/* error  */}
                {authError? <View style={styles.errorContainer}>
                    <Text style={styles.errorMsg}>{i18n.signIn.error}</Text>
                </View>: null}

                <View style={styles.button}>
                    <SignInButton title={i18n.signIn.btnTitle} onPress={()=> onSignIn()} isLoading={signing}/>
                </View>
                <Text style={styles.welcomeSubtitle}>{i18n.signIn.account}<Text style={styles.register}> { i18n.signIn.register}</Text></Text>
          </View>
          </ImageBackground>
          
        </View>

    </SafeAreaView>
    );

}

//styles 
const {height} = Dimensions.get("screen");
const height_logo = height * 0.12;



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        color: "#222E5f"
      },
      ImageBody: {
        flex:1, 
        width: "101%", 
        height: "106%", 
      },    
      body: {
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end",
        padding: 20,
        paddingLeft: 25,
      },
      inputs: {
          width: '90%',
          borderWidth: 1,
          borderColor: '#5D84C3',
          borderRadius: 4,
          backgroundColor: "#fff",
          padding: 7,
          marginTop: 5,
          marginBottom: 5
      },  
    welcome: {
        alignSelf: "flex-start",
        textAlign: "center",
        color: '#222E5f',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    welcomeSubtitle: {
        alignSelf:"flex-start",
        color: "#222E5f",
        fontSize: 17,
        // fontWeight: "bold",
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 20
    },
    register : {
        color: "#5D84C3",
    },
    mainLogo: {
        marginTop: 20,
        height: height_logo,
        width: 200
    },  
    logo:{
        // height: 110,
        // width: 130,
        marginBottom: 0,
    }, 
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#fff',
        fontSize: 14,
    },
    errorContainer:{
        backgroundColor: "#808000",
        color: "white",
        flexDirection: "row",
        padding: 10,
        width: "90%",
        marginTop: 5,
        borderRadius: 4
    },  
    button: {
        alignItems: 'center',
        marginTop: 30,
        width: "90%"
    },
    
  });


export default SignInScreen;