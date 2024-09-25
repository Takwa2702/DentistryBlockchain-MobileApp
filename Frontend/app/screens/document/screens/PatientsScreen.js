import React , {useState, useEffect} from "react";
import { View , StyleSheet, Text, ImageBackground, StatusBar, Image, Picker, ScrollView, TextInput} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {SafeAreaView} from "react-native-safe-area-context";
import {i18n} from "../nls";
import { FAB} from 'react-native-elements';
import { useForm, Controller } from "react-hook-form";
import { CommonInput} from "../../../components/input";
import {coreApi} from "../../../api";
import {useSelector, useDispatch} from "react-redux";
import {docActions} from "../../../storage/actions";
Icon.loadFont();

const defaultValues = {EID: "", email: "", firstName: "", lastName: "", middleName: "", mobile: "", address: "", insurance: "", dob: "", gender: "", nationality: "", bloodType: ""}

const PatientsScreen = ({navigation}) => {

    const dispatch = useDispatch(); 
    const setDocInfo = info => dispatch(docActions.setDocInfo(info));
    const patientData = useSelector(state => state.docInfo.docInfo.patientDetails);
    const mode = useSelector(state => state.mode.docMode);
    const docId = useSelector(state => state.docInfo.docInfo.id);
    const { control, handleSubmit, formState: { errors } } = mode? useForm(defaultValues) : useForm(patientData);


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          console.log('Refreshed', mode);
        });
        return unsubscribe;
      }, [navigation]);


    //check if the its oncreate a document mode (if so) get the data if document Id is found    

    const onUpdate = async (data)=> {
        //call the api to udpate
        let results = await coreApi.updatePatient({id: docId, token: "", data: data});
        setDocInfo(results.data[0]);
    }

    const onSave = async (data) => {
        let results = await coreApi.savePatient({id: docId, data});
        setDocInfo(results.data[0]);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
                <ImageBackground source={require('../../../assets/dark-blue-background.png')} resizeMode="cover" style={styles.headerImage}>

            <View style={styles.body}>
                <View style={styles.card}>
                    <Text style={styles.subtitle}>Personal Details</Text>
                    <View style={{height: 1, backgroundColor: "#00000030", margin: 10}}></View>
                    <ScrollView>
                    {/* form details */}
                    <Text style={styles.formLabel}>First Name</Text>
                    <Controller control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="eg. john"
                            />
                        )}
                        name="firstName"
                        defaultValue={mode? defaultValues.firstName : patientData.firstName}
                    />
                    {errors.firstName && <Text style={styles.errorText}>This is required.</Text>}

                    <Text style={styles.formLabel}>Middle Name</Text>
                    <Controller control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="eg. william"
                            />
                        )}
                        name="middleName"
                        defaultValue={mode? defaultValues.middleName : patientData.middleName}
                    />
                    {errors.firstName && <Text style={styles.errorText}>This is required.</Text>}
                    
                    <Text style={styles.formLabel}>Last Name</Text>
                    <Controller control={control}
                        rules={{
                            maxLength: 100,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="eg. smith"
                        />
                        )}
                        name="lastName"
                        defaultValue={mode? defaultValues.lastName : patientData.lastName}
                    />

                    <Text style={styles.formLabel}>Email</Text>
                    <Controller control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="eg. john@gmail.com"
                        />
                        )}
                        name="email"
                        defaultValue={mode? defaultValues.email : patientData.email}
                    />
                    {errors.email && <Text style={styles.errorText}>This is required.</Text>}

                    <Text style={styles.formLabel}>Mobile</Text>
                    <Controller control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="eg. 0558541816"
                        />
                        )}
                        name="mobile"
                        defaultValue={mode? defaultValues.mobile : patientData.mobile}
                    />
                    {errors.mobile && <Text style={styles.errorText}>This is required.</Text>}

                    <Text style={styles.formLabel}>Eimirates ID</Text>
                    <Controller control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="eg. 987-192321-23"
                        />
                        )}
                        name="EID"
                        defaultValue={mode? defaultValues.EID : patientData.EID}
                    />
                    {errors.EID && <Text style={styles.errorText}>This is required.</Text>}

                    <Text style={styles.formLabel}>Address </Text>
                    <Controller control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="eg. reem island"
                        />
                        )}
                        name="address"
                        defaultValue={mode? defaultValues.address : patientData.address}
                    />
                    {errors.address && <Text style={styles.errorText}>This is required.</Text>}

                    <Text style={styles.formLabel}>Insurance </Text>
                    <Controller control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="eg. Daman"
                        />
                        )}
                        name="insurance"
                        defaultValue={mode? defaultValues.insurance : patientData.insurance}
                    />
                    {errors.insurance && <Text style={styles.errorText}>This is required.</Text>}

                    <Text style={styles.formLabel}>Date of Birth </Text>
                    <Controller control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="eg. yyyy/mm/dd"
                        />
                        )}
                        name="dob"
                        defaultValue={mode? defaultValues.dob : patientData.dob}
                    />
                    {errors.dob && <Text style={styles.errorText}>This is required.</Text>}

                    <Text style={styles.formLabel}>Gender </Text>
                    <Controller control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="eg. Male"
                        />
                        )}
                        name="gender"
                        defaultValue={mode? defaultValues.gender : patientData.gender}
                    />
                    {errors.gender && <Text style={styles.errorText}>This is required.</Text>}

                    <Text style={styles.formLabel}>Nationality </Text>
                    <Controller control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="eg. UAE"
                        />
                        )}
                        name="nationality"
                        defaultValue={mode? defaultValues.nationality : patientData.nationality}
                    />
                    {errors.nationality && <Text style={styles.errorText}>This is required.</Text>}

                    <Text style={styles.formLabel}>Blood Type </Text>
                    <Controller control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="eg. A+"
                        />
                        )}
                        name="bloodType"
                        defaultValue={mode? defaultValues.bloodType : patientData.bloodType}
                    />
                    {errors.bloodType && <Text style={styles.errorText}>This is required.</Text>}

                   



                    </ScrollView>
            </View>
            
          </View>
          {!mode ?
          <FAB title="Update" style={{position: 'absolute', right: 20, bottom: 100}} color="#EB5C5E" onPress={handleSubmit(onUpdate)} icon={<Icon name="save" size={18} color="#fff"></Icon>}/>:
          <FAB title="Save" style={{position: 'absolute', right: 20, bottom: 100}} color="#EB5C5E" onPress={handleSubmit(onSave)} icon={<Icon name="save" size={18} color="#fff"></Icon>}/>

            }
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
        // zIndex: 5,
        backgroundColor: "#ffffff00",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 20,
        flex: 1

    },
    welcomeCard: {
        paddingHorizontal: 0,
        paddingVertical: 5,
        backgroundColor: "transparent", 
        borderRadius: 4,
        
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
    formLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
        color: "#222E5F"
    },
    errorText: {
        color: "red",
        marginTop: 3
    },
    input:{
        marginTop:10,
        borderWidth: 1, 
        height: 45,
        borderRadius: 4,
        backgroundColor: "#fff",
        borderColor: "#5D84C340",
        width: "100%",
        paddingLeft: 15
    }
})


export default PatientsScreen;