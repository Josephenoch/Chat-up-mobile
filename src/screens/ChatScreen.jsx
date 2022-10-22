import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import bgImage  from "../../assets/images/BG.png"
const ChatScreen = () => {
  return (
    <ImageBackground 
        source={bgImage} 
        style={styles.bg}
    >
        <Text>hello</Text>
    </ImageBackground>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    bg:{
        flex:1
    }
})