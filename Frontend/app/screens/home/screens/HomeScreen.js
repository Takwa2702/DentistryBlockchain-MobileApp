import React, { useState, Component, useEffect } from "react";
import { View, StyleSheet, TextInput, ImageBackground, StatusBar, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";
// import {} from "react-native-elements";
import * as Animatable from 'react-native-animatable';
import { Text, Overlay } from "react-native-elements";
import { AddDocument, SortBy, ViewDocument, Reject, Confirm } from "../../../components/bottons";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { SearchInput } from "../../../components/input";
import { i18n } from "../nls";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import { coreApi } from "../../../api";
import { docActions } from "../../../storage/actions";
import { docReducer } from "../../../storage/reducers";
import { CommonActions } from '@react-navigation/native';

Icon.loadFont();

//get time 
const getDate = (mil) => {
    let date = new Date(mil);
    return date.getDate() + "-" + (date.getMonth() + 1);
}
//get age 
const getAge = birthDate => { return Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10) }



const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const userInfo = useSelector(state => state.userInfo);
    const token = useSelector(state => state.token);
    const mode = useSelector(state => state.mode.docMode);

    const [visible, setVisible] = useState(false);
    const [creating, setCreating] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    //vaiables and functions 
    const [Docx, setDocx] = useState([]);

    const setMode = boolean => dispatch(docActions.setDocMode(boolean));
    const setDocInfo = info => dispatch(docActions.setDocInfo(info));
    //fetch the patients data from the api and store them

    useEffect(async () => {
        let documents = await coreApi.getDocuments();
        setDocx(documents.data);
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Refreshed', mode);
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'Home' },
                    ],
                })
            );
        });
        return unsubscribe;
    }, []);


    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => onOldDoc(item.id)}>
            <View style={styles.cardContainer} key={item.id} >
                {/* <Image source={{ uri: item.patientDetails.imageURL }} style={styles.listImage}></Image> */}
                <View style={styles.listContent}>
                    <View style={styles.listCardHeader}>
                        <Text style={styles.listCardHeaderDescription}>REQ-112345</Text>
                        <Text style={{ color: "#999999" }}> Aug 10</Text>
                    </View>
                    <Text style={styles.listCardHeaderTitle}>Organization Name</Text>
                    <View style={styles.listFigures}>
                        <View style={styles.figure}>
                            {/* <Icon name="tint" size={25} color="red" style={{ marginRight: 10 }}></Icon> */}
                            <View style={{backgroundColor: "yellow", borderRadius: 50, width: 15, height: 15, marginRight: 10}}></View>
                            <Text style={styles.figureVal}>Approved</Text>
                        </View>
                        {/* <View style={styles.figure}>
                            {item.patientDetails.gender == "Male" ? <Icon name="male" size={25} color="#5D84C3" style={{ marginRight: 10 }}></Icon> : <Icon name="female" size={25} color="#5D84C3" style={{ marginRight: 10 }}></Icon>}
                            <Text style={styles.figureVal}>{item.patientDetails.gender}</Text>
                        </View>
                        <View style={styles.figureLast}>
                            <Icon name="calendar" size={20} color="#000" style={{ marginRight: 10 }}></Icon>
                            <Text style={styles.figureVal}>{getAge(item.patientDetails.dob)} yrs</Text>
                        </View> */}
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    )


    //on search
    const onSearch = () => {

    }

    const onOldDoc = async (id) => {
        //get its data
        let res = await coreApi.getDocument({ id });
        console.log("selected document", res);
        if (res.success) {
            setDocInfo(res.data[0]);
            setMode(false);
            navigation.navigate('New Document');
        }
        // setTimeout(()=> navigation.navigate("New Document"), 250);

    }

    const onNewDoc = async () => {
        //make the mode of creating = true
        setCreating(true);
        let res = await coreApi.createDocument({ id: userInfo.userInfo.id })
        if (res.success) {
            setMode(true);
            setDocInfo(res.data[0]);
            toggleOverlay();
            navigation.navigate('New Document');
        }

    }

    return (
        <View style={styles.container} >
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <ImageBackground source={require('../../../assets/blue-background.png')} resizeMode="cover" style={styles.headerImage}>

                <View style={styles.header}>
                    {/* <ImageBackground source={require('../../../assets/home.png')} resizeMode="stretch" style={styles.headerImage}> */}
                    {/* card view here */}
                    <View style={styles.welcomeCard}>
                        <Text style={styles.userTitle}>{i18n.home.welcomeTitle + userInfo.userInfo.firstName + " " + userInfo.userInfo.lastName}</Text>

                        {/* <Text style={styles.userSubtitle}>{i18n.home.welcomeSubTitle}</Text> */}
                        <View style={{ alignItems: "flex-start", width: '100%', marginTop: 10, backgroundColor: "#E68686", borderRadius: 4, paddingVertical: 20, paddingHorizontal: 10, borderLeftWidth: 5, borderLeftColor: "#ffffff" }}>
                            <Text style={styles.welcomeTitle}>Welcome Back..</Text>
                            <Text style={styles.userSubtitle}>{i18n.home.welcomeSubTitle}</Text>
                            {/* <AddDocument title="Document" onPress={()=> toggleOverlay()} /> */}
                        </View>
                    </View>
                    {/* <SearchInput title="search for patients" /> */}
                    <View style={{ flexDirection: "row", alignItems: "stretch", width: '100%', marginTop: 10,  }}>
                        {/* <Text style={styles.welcomeTitle}>Welcome Back..</Text> */}
                        {/* <Text style={styles.userSubtitle}>{i18n.home.welcomeSubTitle}</Text> */}
                        {/* <AddDocument title="Document" onPress={()=> toggleOverlay()} /> */}
                        <View style={{backgroundColor: "#fff", borderRadius: 4, padding: 20, flexGrow: 1, marginRight: 5, alignItems: "center"}}>
                            <Text style={{fontSize: 14, fontWeight: "bold", color: "#222E5F"}}>Lab Results</Text>
                            <View style={{flexDirection: "row"}}>
                            <Image source={require('../../../assets/vial-solid.png')} style={{marginTop: 16, marginRight: 5}} ></Image>
                            <Text style={{fontSize: 40, fontWeight: "bold", color: "#222E5F", marginTop: 10}}>2</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor: "#fff", borderRadius: 4, padding: 20, flexGrow: 1, marginLeft: 5, alignItems: "center"}}>
                            <Text style={{fontSize: 14, fontWeight: "bold", color: "#222E5F"}}>Prescriptions</Text>
                            <View style={{flexDirection: "row"}}>
                            <Image source={require('../../../assets/pills-solid.png')} style={{marginTop: 16, marginRight: 5}} ></Image>
                            <Text style={{fontSize: 40, fontWeight: "bold", color: "#222E5F", marginTop: 10}}>4</Text>
                            </View>
                        </View>
                    </View>
                    {/* </ImageBackground> */}
                </View>

                <View style={styles.body}>

                <View style={{  justifyContent: "space-between",  width: "100%" }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#222E5F" }}>Allergies</Text>
                        <Text style={{ fontSize: 18, fontWeight: "400", color: "#5D84C3", "margin": 20, "textAlign": "center" }}>No Allergies</Text>
                        {/* <SortBy title="Sort By" onPress={() => { console.log("add new document") }} /> */}
                    </View>

                    <View style={{  justifyContent: "space-between",  width: "100%" }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#222E5F" }}>Medicines</Text>
                        <Text style={{ fontSize: 18, fontWeight: "400", color: "#5D84C3", "margin": 20, "textAlign": "center" }}>No Medicines</Text>
                        {/* <SortBy title="Sort By" onPress={() => { console.log("add new document") }} /> */}
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#222E5F" }}>Recent Visits</Text>
                        {/* <SortBy title="Sort By" onPress={() => { console.log("add new document") }} /> */}
                    </View>
                    {Docx.length > 0 ? <FlatList data={Docx} renderItem={renderItem}
                        style={{ width: '100%', marginTop: 5, paddingHorizontal: 5, paddingBottom: 80 }} onPress={(item) => console.log("item is selected", item.id)}></FlatList> :
                        <View style={styles.noDataContainer}><Icon name="folder-open" size={25} style={{ marginRight: 10 }}></Icon><Text style={{ color: "#000", fontSize: 20 }}>No data</Text></View>}
                </View>


                <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                    <View style={styles.overlay}>
                        <Text style={{ fontSize: 18, color: "#000", alignSelf: "center", marginBottom: 20, fontWeight: "bold" }}>Confirmation</Text>
                        <Text>Are you sure that you want to create a new pateint document?</Text>
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", padding: 10 }}>
                            <Reject title="No" onPress={() => toggleOverlay()} /><Confirm title="Yes" onPress={() => onNewDoc()} isLoading={creating} />
                        </View>
                    </View>
                </Overlay>


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
        // flex: 0.7,
        backgroundColor: "#ffffff00",
        paddingHorizontal: 20,
        marginTop: 60
    },
    headerImage: {
        flex: 1,
        // padding:20
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
        fontSize: 12,
        color: "#fff"
    },
    welcomeTitle: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold"
    },
    body: {
        // flex: 1,
        zIndex: 5,
        backgroundColor: "#ffffff00",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 20,
        marginTop: 50

    },
    inputs: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#BBBBBB',
        borderRadius: 4,
        backgroundColor: "#fff",
        padding: 7,
        marginTop: 10,
        // marginBottom: 5
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    //---------------
    cardContainer: {
        backgroundColor: "#fff",
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderLeftWidth: 5,
        borderLeftColor: "#222E5F",
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 2,
    },
    noDataContainer: {
        backgroundColor: "#fff",
        width: '100%',
        height: 200,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 2,
    },
    listImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#000",
        marginRight: 10
    },
    listContent: {
        flexGrow: 1,
        padding: 0
    },
    listCardHeader: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between"
    },
    listCardHeaderTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5
    },
    listCardHeaderDescription: {
        marginTop: 5,
        fontSize: 13,
        color: "#998FA2"
    },
    listFigures: {
        flexDirection: "row",
        flex: 1,
        marginTop: 10,
    },
    figure: {
        flexDirection: "row",
        flexGrow: 1,
        // marginTop: 10,
        // borderRightWidth: 1,
        // borderRightColor: "#00000030",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    figureLast: {
        flexDirection: "row",
        flexGrow: 1,
        // marginTop: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    figureVal: {
        fontWeight: "500",
        fontSize: 15,
        color: "#222E5F"
    },
    overlay: {
        padding: 20,
    }

})


export default HomeScreen;