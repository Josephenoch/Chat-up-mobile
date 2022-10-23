import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"
import {useNavigation} from "@react-navigation/native"
dayjs.extend(relativeTime)


const ChatListItem = ({
  chat
}) => {
  const navigation = useNavigation()
  return (
    <Pressable
      style={styles.rootContainer}
      onPress={()=>navigation.navigate("Chat", {id: chat.user.id, name: chat.user.name})}
    >
      <Image source={{
        uri: chat?.user?.image,
        }}
        style={styles.image}
        />
      <View style={styles.textContainer}>
        <View style={styles.nameTime}>
          <Text style={styles.name} numberOfLines={1}>{chat?.user.name}</Text>
          <Text style={styles.subtitle}>{dayjs(chat?.lastMessage?.createdAt).fromNow()}</Text>
        </View>
        <Text numberOfLines={2} style={styles.subtitle}>{chat?.lastMessage?.text}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  rootContainer:{
    flexDirection:"row",
    marginHorizontal:10,
    marginVertical: 5,
    height:70
  },
  image:{
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight:10
  },
  textContainer:{
    flex:1,
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  nameTime:{
    flexDirection: "row",
    marginBottom:5
  },
  name:{
    flex:1,
    fontWeight: "bold"
  },
  subtitle:{
    color: "grey "
  }
})

export default ChatListItem