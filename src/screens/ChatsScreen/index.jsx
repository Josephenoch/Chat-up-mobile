import { API, Auth, graphqlOperation } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ChatListItem from '../../components/ChatListItem'
import { listUserChatRooms } from './queries'
export default function ChatsScreen() {
  const [chatRooms, setChatRooms] = useState([])
  const getData =  async () =>{
    const currentUser = await Auth.currentAuthenticatedUser()
    const response = await API.graphql(graphqlOperation(listUserChatRooms, {
      id: currentUser?.attributes.sub
    }))
    setChatRooms(response?.data?.getUser?.chatRooms?.items)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
      <FlatList
        data={chatRooms}
        renderItem={({item})=> <ChatListItem chat={item}/>}
        style={{
          backgroundColor: "white"
        }}
      />
  )
}

const styles = StyleSheet.create({})