
import { FlatList, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native'
import bgImage  from "../../assets/images/BG.png"
import Message from '../components/Message'
import MessageDummyData from "../../assets/data/messages.json"
import InputBox from '../components/InputBox'
import {useRoute, useNavigation} from "@react-navigation/native"
import { useEffect } from 'react'

const ChatScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  useEffect(()=>{
    navigation.setOptions({title: route.params.name})
  },[route?.params?.name])
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
                data={MessageDummyData}
                renderItem={({item})=> <Message message={item}/>}
                inverted
                style={styles.list}
            />
            <InputBox/>
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