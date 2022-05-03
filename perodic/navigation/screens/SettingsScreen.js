import * as React from 'react';
import { View, Text,Image, Button, StyleSheet } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import { auth } from './firebase';
import {
    Avatar,
    Title,
    Caption,
    TouchableRipple,
  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SettingsScreen({ navigation }) {
    
    const [darkTheme, setDarkTheme] = React.useState(false);

    const pickImage = () =>{
        launchImageLibrary({quality:0.5}, (fileObj) =>{
            console.log(fileObj)
        })
    }


    const signOutUser = () =>{
        auth.signOut()
        .then(() =>{
            navigation.navigate("Login")
        }).catch((err) =>{
            console.log(err.message)
        })
    }

    const toggleSwitch = () =>{
        setDarkTheme(!darkTheme)
    }
    return (
        <>
           <View >
                 <Image style={{width:100, height:100, borderRadius:50}} source={require('../../assets/logo.png')} />
                 <Text style={styles.logout} onPress={() => signOutUser()}>Logout</Text>
           </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    image:{
        flex:1,
        alignItems:"center"
    },
    logout:{
        width:150,
        color:"white",
        borderRadius:10,
        padding:10,
        fontSize:18,
        backgroundColor:"#E23737",
    }
  });