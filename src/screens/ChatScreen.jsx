import { FlatList, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import bgImage  from "../../assets/images/BG.png"
import Message from '../components/Message'
import MessageDummyData from "../../assets/data/messages.json"
import InputBox from '../components/InputBox'

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView
        behavior= {Platform.OS === "ios" ? "padding" : "height"}
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