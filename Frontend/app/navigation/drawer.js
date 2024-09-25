import React from 'react';
import { View, StyleSheet , Image} from 'react-native';
import {
    // Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';



export default function DrawerContent(props) {


    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                          
                            label="Home"
                        />
                        <DrawerItem 
                           
                            label="My History"
                        />
                        <DrawerItem 
                           
                            label="My Profile"
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            
           

        </View>
    );
}

const styles = StyleSheet.create({
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 60, 
      height: 60,
      borderRadius: 70, 
      backgroundColor: "#1C4E80",
      justifyContent: "center",
      alignItems: "center"
    },
    avatarName: {
      alignSelf: "center",
      fontSize: 16, 
      color: "white"
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    icon: {
        height: 20,
        width: 20
    },
    footer: {
        width: '100%',      
        alignItems: "center",
        alignSelf: "center",
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    logo: {
      height: 110,
      width: 130,
      marginBottom: 0,
    },
    copyRight: {
      fontSize: 12,
      color: "gray",
      textAlign: "center",
      alignSelf:"center"
  },
  });