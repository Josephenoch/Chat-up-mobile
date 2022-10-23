import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import DummyScreen from '../screens/DummyScreen'
import ChatsScreen from '../screens/ChatsScreen'
import {Ionicons, Entypo} from "@expo/vector-icons"

const Tab = createBottomTabNavigator()
const MainTabNavigator = () => {
  return (
    <Tab.Navigator 
      initialRouteName='Chats'
      screenOptions={{
        tabBarStyle: {backgroundColor: "whitesmoke"},
        headerStyle: {backgroundColor: "whitesmoke"}


      }}
    >
      <Tab.Screen 
        name="Status" 
        component={DummyScreen}
        options={{
          tabBarIcon:({size, color})=> <Ionicons name="logo-whatsapp" size={size} color={color} />
        }}
      />
      <Tab.Screen 
        name="Calls" 
        component={DummyScreen}
        options={{
          tabBarIcon:({size, color})=> <Ionicons name="call-outline" size={size} color={color} />
        }}
      />
      <Tab.Screen 
        name="Camera" 
        component={DummyScreen} 
        options={{
          tabBarIcon:({size, color})=> <Ionicons name="camera-outline" size={size} color={color} />
        }}
      />
      <Tab.Screen 
        name="Chats" 
        component={ChatsScreen} 
        options={{
          tabBarIcon:({size, color})=> <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />,
          headerRight: ()=> <Entypo name="new-message" size={18} color="royalblue" style={{marginRight: 15 }}/>
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={DummyScreen}  
        options={{
          tabBarIcon:({size, color})=> <Ionicons name="settings-outline" size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator

const styles = StyleSheet.create({})