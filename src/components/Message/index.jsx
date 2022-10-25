import { StyleSheet, Text, View } from 'react-native'
import React, {  useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"
import { Auth } from 'aws-amplify'

dayjs.extend(relativeTime)
const Message = ({message}) => {
  const [isSender, setIsSender] = useState(false)
  const  isMyMessage = async() => {
    const userID = (await Auth.currentAuthenticatedUser())?.attributes?.sub
    setIsSender(message.senderID === userID)
  }
  useEffect(()=>{
    isMyMessage()
  },[])
  return (
    <View 
        style={[styles.rootContainer, {
            backgroundColor: isSender ? "#DCF8C5" : "white",
            alignSelf: isSender ? "flex-end" : "flex-start"
        }]}
    >
      <Text>{message?.text}</Text>
      <Text style={styles.time}>{dayjs(message?.createdAt).fromNow(true)}</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
    rootContainer:{
        margin: 5,
        padding:10,
        borderRadius: 10,
        maxWidth: "80%",
    },
    time:{
        color: "grey",
        alignSelf: "flex-end"
    }
})