import { FlatList, StyleSheet, Text, View } from 'react-native'
import ChatDummyData from "../../assets/data/chats.json"
import ChatListItem from '../components/ChatListItem'
export default function ChatsScreen() {
  return (
      <FlatList
        data={ChatDummyData}
        renderItem={({item})=> <ChatListItem chat={item}/>}
        style={{
          backgroundColor: "white"
        }}
      />
  )
}

const styles = StyleSheet.create({})