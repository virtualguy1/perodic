import React from 'react';
import { View, Text, Button, StyleSheet, FlatList,Image,Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native';
import * as Animate from 'react-native-animatable'


const Splash = ({navigation}) => {
    return (
      <Animate.View
        animation="bounceIn"
      style={styles.container}>
         <View style={styles.header}>
         <Image  source={require('../../assets/logo.png')} />
         </View>
         <View style={styles.footer}>
            <Text style={styles.title}>Stay connected with everyone!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.signIn}>
                    <Button color="#EB5F5F" title="Get Started" onPress={() => navigation.navigate("Login")} />
                </TouchableOpacity>
            </View>
        </View>
        
      </Animate.View>
    );
};

export default Splash;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#E23737'
      },
      header: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
      },
      footer: {
          flex: 1,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: 50,
          paddingHorizontal: 30
      },
      logo: {
        width:"100px",
        height: "100px"
    },
    text: {
        color: '#EB5F5F',
        marginTop:5
    },
    title: {
        color: '#EB5F5F',
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
      
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'

    }
});