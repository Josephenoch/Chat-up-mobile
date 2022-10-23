import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatDummyData from "../../assets/data/chats.json"
import Contact from '../components/Contact'

const ContactsScreen = () => {
  return (
    <FlatList
    data={ChatDummyData}
    renderItem={({item})=> <Contact contact={item.user}/>}
    style={{
      backgroundColor: "white"
    }}
  />
  )
}

export default ContactsScreen

const styles = StyleSheet.create({})