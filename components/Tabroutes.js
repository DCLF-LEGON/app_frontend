import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Channels from '../screens/HomeScreens/Channels';
import Sermons from '../screens/HomeScreens/SermonScreen';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Feather,Ionicons, Octicons, FontAwesome5 } from "@expo/vector-icons";
import Details from '../screens/HomeScreens/DetailsScreen';

const BottomStack = createBottomTabNavigator();


const TopStack = createMaterialTopTabNavigator();



 function TopTabScreen() {
  return (
    <TopStack.Navigator>
      <TopStack.Screen name="Sermon" component={Sermons} />
      <TopStack.Screen name="Channels" component={Channels} />
    </TopStack.Navigator>
  );
}


export default function BottomStackScreen(){
  return(
    <BottomStack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        color:"#0174DF",         
      }}
    >
      <BottomStack.Screen
        name="Sermons"
        component={TopTabScreen}
        options={{
          tabBarLabel: 'Sermons',
          tabBarIcon: ({ color, size }) => (
            <Feather name="message-circle" color="#0174DF" size={26} />
          ),
        }}
      />
       <BottomStack.Screen
        name="Dicover"
        component={Channels}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline"  color="#0174DF"  size={26} />
          ),
        }}
      />
       <BottomStack.Screen
        name="Notes"
        component={Channels}
        options={{
          tabBarLabel: 'Notes',
          tabBarIcon: ({ color, size }) => (
            <Octicons name="diff-added"  color="#0174DF"  size={26} />
          ),
        }}
      />
       <BottomStack.Screen
        name="Notifications"
        component={Channels}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline"  color="#0174DF"  size={26} />
          ),
        }}
      />
       <BottomStack.Screen
        name="Profile"
        component={Channels}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" color="#0174DF"  size={26} />
          ),
        }}
      />
      
    </BottomStack.Navigator>
  );
}