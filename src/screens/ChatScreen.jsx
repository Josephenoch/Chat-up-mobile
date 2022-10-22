import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import bgImage  from "../../assets/images/BG.png"
import Message from '../components/Message'
import MessageDummyData from "../../assets/data/messages.json"

const ChatScreen = () => {
  return (
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
        
    </ImageBackground>
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