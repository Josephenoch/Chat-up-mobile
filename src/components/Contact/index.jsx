import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"
import {useNavigation} from "@react-navigation/native"
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { listChatRooms } from '../../graphql/queries'
import { createChatRoom, createChatRoomUser } from '../../graphql/mutations'
dayjs.extend(relativeTime)


const Contact = ({
 contact
}) => {
  const navigation = useNavigation()
  const handlePress = async () =>{
    try{
      // const chatRoom = await API.graphql(graphqlOperation(listChatRooms, {
      //   filter:{
      //     userID: {eq: contact.id}
      //   }
      // }))
      // const chatRoomExists = chatRoom?.data?.listChatRooms?.items[0]
      // if(chatRoomExists){
      //   navigation.navigate("Chat", {id: chatRoomExists?.id, name: contact.name})
      // }
      // else{
        const newChatRoomRawData = await API.graphql(graphqlOperation(createChatRoom, {input:{}}))
        const newChatRoom = newChatRoomRawData?.data?.createChatRoom
        const currentUser = await Auth.currentAuthenticatedUser()
        await API.graphql(graphqlOperation(createChatRoomUser, {
          input:{
            chatRoomID: newChatRoom?.id,
            userID: contact.id
          }
        }))
        await API.graphql(graphqlOperation(createChatRoomUser, {
          input:{
            chatRoomID: newChatRoom?.id,
            userID: currentUser?.attributes?.sub
          }
        }))
        navigation.navigate("Chat", {id: newChatRoom?.id, name: contact.name})

      }

    // }
    catch(err){
      console.log(err)
    }
  }
  return (
    <Pressable
      style={styles.rootContainer}
      onPress={handlePress}
    >
      <Image source={{
        uri: contact?.image,
        }}
        style={styles.image}
        />
      <View style={styles.textContainer}>
        <View style={styles.nameTime}>
          <Text style={styles.name} numberOfLines={1}>{contact.name}</Text>
        </View>
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
  }
})

export default Contact