
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import SplashScreen from './Splash.js';
import SignInScreen from './Login';
import SignUpScreen from './Signup';
import Main from '../MainContainer';
import AddPost from './AddPost.js';
import Edit from './Edit';

const RootStack = ({navigation}) => (
    <Stack.Navigator>
       <Stack.Screen name="Welcome" component={SplashScreen} />
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Edit" component={Edit}/>
        <Stack.Screen name="Register" component={SignUpScreen}/>
        <Stack.Screen name="AddPost" component={AddPost} />
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
    </Stack.Navigator>
    // <RootStack.Navigator headerMode='none'>
    
    // </RootStack.Navigator>
);

export default RootStack;