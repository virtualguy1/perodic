import * as React from 'react';
import { View, Text } from 'react-native';
import MessageScreen from "./Message"
import ChatScreen from './Chat'
import Profile from './ProfileScreen'
import Post from './Post'

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


export default function CommunityScreen({ navigation }) {
    return (
      <Stack.Navigator>
          <Stack.Screen name="Message" component={MessageScreen} />
          <Stack.Screen name="Profile" component={Profile}   />
          <Stack.Screen name="Post" component={Post} />
          <Stack.Screen name="Chat" component={ChatScreen} options={({route}) =>({
            title:route.params.userName,
            headerBackTitleVisible:false
          })} />
      </Stack.Navigator>
    );
}