import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, FlatList,StatusBar,TouchableHighlight, Image,Dimensions,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable'
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { auth } from './firebase';
import HomeScreen from './HomeScreen';


const homeName = "Home";

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = () =>{
      auth.signInWithEmailAndPassword(email,password).catch((error) => alert(error))
  } 

  useEffect(() =>{
    const unSubscribe = auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        navigation.navigate("Main")
      }
    })
    return unSubscribe;
  },[])

  const [data, setData] = React.useState({
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
});
const textInputChange = (val) => {
  if( val.length !== 0 ) {
      setData({
          ...data,
          email: val,
          check_textInputChange: true,
      });
  } else {
      setData({
          ...data,
          email: val,
          check_textInputChange: false,
      });
  }
  } 
    const updateSecureTextEntry = () => {
      setData({
          ...data,
          secureTextEntry: !data.secureTextEntry
      });
    }

  return (
          <View
          animation="bounceIn"
        style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
              <View style={styles.header}>
                  <Text style={styles.text_header}>Hello Again!</Text>
                  <Text style={styles.text_headers}>Welcome back</Text>
              </View>
          <Animatable.View 
          style={styles.footer}
            animation="fadeInUpBig"
          >
                <Text style={styles.text_footer}>Email</Text>
                <View style={[styles.action, {marginTop:25}]}>
                <TextInput placeholder='Enter your email' onChangeText={(text) => setEmail(text)} style={styles.textInput} autoCapitalize='none' />
                {/* {data.check_textInputChange
                  ? 
                  <Feather 
                          name="check-circle"
                          color="green"
                          size={20}
                    />
                    :null

                } */}
                 <Feather 
                          name="check-circle"
                          color="green"
                          size={20}
                    />
                </View>
                <Text style={[styles.text_footer,{marginTop:25}]}>Password</Text>
                <View style={[styles.action ,{marginTop:25}]}>

                <TextInput placeholder='Enter your password' secureTextEntry onChangeText={(text) => setPassword(text)} style={styles.textInput} autoCapitalize='none' />
                <TouchableOpacity onPress={updateSecureTextEntry}>
                  {/* {data.secureTextEntry ?
                    <Feather 
                    name="eye-off"
                    color="green"
                    size={20}
            />
                :
                <Feather 
                name="eye"
                color="green"
                size={20}
                />
                } */}
                <Feather 
                    name="eye-off"
                    color="green"
                    size={20}
            />
                </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <Text style={styles.textSign} color="transparent" onPress={() => userLogin()}>Login</Text>
                </View>
                <View>
                <TouchableOpacity 
                  onPress={() => navigation.navigate('Register')}
                    style={[styles.signIn, {
                      borderColor:'#E23737',
                      borderWidth:1,
                      marginTop:15
                    }]}
                    >
                       <Text style={styles.signup}>Signup</Text>
                </TouchableOpacity>
                </View>
          </Animatable.View>
        </View>
  )
}

export default Login

const  styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#E23737'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
},
footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
},
 text_header: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 30
},
text_headers:{
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 20
},
text_footer: {
  color: '#05375a',
  fontSize: 18
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
  paddingLeft: 0,
  color: '#05375a',
},
errorMsg: {
  color: '#FF0000',
  fontSize: 14,
},
button: {
  alignItems: 'center',
  backgroundColor:"#E23737",
  marginTop: 50,
  justifyContent: 'center',
  borderRadius: 10,
  width: '100%',
  height: 50,
},
signIn: {
  width: '100%',
  height:50,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
},
signup:{
  color:"#E23737",
  fontSize: 18,
  fontWeight: 'bold'
},
textSign: {
  fontSize: 18,
  color:"#fff",
  backgroundColor:"transparent",
  fontWeight: 'bold'
}
});