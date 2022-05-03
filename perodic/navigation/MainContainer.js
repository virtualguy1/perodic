import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReminderScreen from './screens/ReminderScreen';
import CommunityScreen from './screens/CommunityScreen';

//Screen names
// const homeName = "Home";
// const settingsName = "Settings";
// const reminderName = "Reminder";
// const communityName = "Community";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Home") {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === "Settings") {
              iconName = focused ? 'settings' : 'settings-outline';
            
            } else if (rn === "Reminder") {
                iconName = focused ? 'alarm' : 'alarm-outline';
            
            } else if (rn === "Community") {
                iconName = focused ? 'people' : 'people-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 5, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Reminder" component={ReminderScreen} />
        <Tab.Screen name="Community" options={{headerShown: false}} component={CommunityScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}

export default MainContainer;