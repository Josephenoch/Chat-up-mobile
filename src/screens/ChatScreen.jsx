
import { ActivityIndicator, FlatList, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native'
import bgImage  from "../../assets/images/BG.png"
import Message from '../components/Message'
import MessageDummyData from "../../assets/data/messages.json"
import InputBox from '../components/InputBox'
import {useRoute, useNavigation} from "@react-navigation/native"
import { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { getChatRoom } from '../graphql/queries'

const ChatScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const [chatRoom, setChatRoom] = useState(null)
  const roomID = route.params.id
  useEffect(()=>{
    navigation.setOptions({title: route.params.name})
  },[route?.params?.name])

  const getChat = async () =>{
    try{
      const chat = await API.graphql(graphqlOperation(getChatRoom, {
        id: route.params.id
      }))
      setChatRoom(chat?.data?.getChatRoom)
    }
    catch(err){
      console.log(err)
    }
  } 

  useEffect(()=>{
    getChat()
  },[route.params.id])

  if(!chatRoom){
    return <ActivityIndicator/>
  }
  return (
    <KeyboardAvoidingView
        behavior = {Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90} 
        style={styles.bg}
    >
        <ImageBackground 
            source={bgImage} 
            style={styles.bg}
        >
            <FlatList
                data={chatRoom.messages.items}
                renderItem={({item})=> <Message message={item}/>}
                inverted
                style={styles.list}
            />
            <InputBox roomID={roomID}/>
        </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    bg:{
        flex:1
    },
    list:{
        padding:10
    }
})