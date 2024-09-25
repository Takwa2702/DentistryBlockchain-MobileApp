import React , {useState, useEffect} from "react";
import { View , StyleSheet, Text, ImageBackground, StatusBar, Image, FlatList, ScrollView, RefreshControl, Picker} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {SafeAreaView} from "react-native-safe-area-context";
import {i18n} from "../nls";
import { FAB} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import {coreApi} from "../../../api/";
import {AddItem, RemovingItem} from "../../../components/bottons";
import {useDispatch, useSelector} from "react-redux";
import {docActions} from "../../../storage/actions";

Icon.loadFont();

const MedicinesScreen = ({navigation}) => {

    const dispatch = useDispatch(); 

    const setDocInfo = info => dispatch(docActions.setDocInfo(info));
    const [medicineOptions , setMedicineOptions] = useState([]);
    const docId = useSelector(state => state.docInfo.docInfo.id);

    const [selectedMedicine, setSelectedMedicine] = useState({
        medicineId: ""
    });

    useEffect(async ()=> {
        let medicines = await coreApi.getMedicines();
        let response = []; 
        medicines.data.forEach((medicine) => {
            response.push({label: medicine.name, value: medicine.id})
        });
        console.log("medicines are available",response);
        setMedicineOptions(medicines.data);
    }, []);
    
    const getDate = (mil) => {
        let date = new Date(mil);
        return date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() ;
    }

    //medicine item 
    const renderItem = ({item}) => (
        <View style={styles.cardContainer} key={item.id} >
            <Image source={{uri:item.imageURL}} style={styles.listImage}></Image>
            <View style={styles.listContent}>
                <View style={styles.listCardHeader}>
                    <Text style={styles.listCardHeaderTitle}>{item.name}</Text>
                    <Text style={{color: "#999999"}}>{item.price} AED</Text>
                </View>
                <Text style={styles.listCardHeaderDescription}>Expiary date will be at {getDate(item.expiaryDate)} </Text>
                <View style={styles.listFigures}>
                    <View style={styles.figure}>
                        <Text style={styles.figureVal}>Size: {item.size}</Text>
                    </View>
                    <View style={styles.figureLast}>
                        <Text style={styles.figureVal}>Tablets : {item.tablets}</Text>
                    </View>
                    <RemovingItem/>
                </View>
            </View>
        </View>
    
    )

    //on screen start we call the api for getting all medicines 
    const onAdd = async ()=> {
        let res = await coreApi.addMedicine({id: docId, medicineId: selectedMedicine});
        console.log("result of adding new medicien", res);
    }

    const onDelete = async ()=> {
        let res = await coreApi.deleteMedicine({id: docId, medicineId: selectedMedicine});
        console.log("results from delteing medicine", res);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
                <ImageBackground source={require('../../../assets/dark-blue-background.png')} resizeMode="cover" style={styles.headerImage}>

            <View style={styles.body}>
                <View style={styles.card}>
                <Text style={styles.subtitle}>Medicines</Text>
                <View style={{height: 1, backgroundColor: "#00000030", margin: 10}}></View>

                <DropDownPicker
                    items={medicineOptions}
                    defaultValue={selectedMedicine.medicineId}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                        borderColor: "#000"
                    }}
                    defaultIndex={100000}
                    dropDownStyle={{backgroundColor: '#000'}}
                    onChangeItem={item => setSelectedMedicine({medicineId: item.value})}/>


                <View style={{justifyContent: "flex-end", alignItems: "flex-end", marginVertical: 20}}>
                    <AddItem title="Add" onPress={()=> console.log("adding a medicine")}/>
                </View>
                <Text style={styles.subtitle}>Curent Medicines</Text>
                <View style={{height: 1, backgroundColor: "#00000030", margin: 10}}></View>

                <FlatList data={medicineOptions} renderItem={renderItem} 
                style={{width: '100%', marginTop: 5, paddingHorizontal: 5, paddingBottom: 80}} onPress={(item)=>console.log("item is selected", item.id) }
                >

                </FlatList>

                </View>


            </View>
            
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
        backgroundColor: "#ffffff00",
        paddingHorizontal: 20,
        marginTop: 40
    },
    headerImage: {
        flex: 1,
    },
    body: {
        backgroundColor: "#ffffff00",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 20,
        flex: 1

    },
    title: {
        color: "#222E5F",
        fontSize: 25, 
        fontWeight: "bold",
    },
    subtitle: {
        marginTop: 5, 
        fontSize: 16,
        color: "#222E5F"
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 2,
        marginBottom: 100
    },

    cardContainer: {
        backgroundColor: "#fff",
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 4,
        flexDirection: "row",
        alignItems:"center",
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
        alignItems:"center",
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
        fontWeight: "bold"
    },
    listCardHeaderDescription: {
        marginTop: 5,
        fontSize: 13,
        color: "#998FA2"
    },
    listFigures: {
        flexDirection: "row", 
        flex: 1, 
        marginTop: 20,
    },
    figure: {
        flexDirection: "row", 
        flexGrow: 1,
        // marginTop: 10,
        borderRightWidth: 1,
        borderRightColor: "#00000030",
        alignItems: "center",
        justifyContent: "center"
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
        color: "#222E5F96"
    },
})


export default MedicinesScreen;