import { StyleSheet, Text, View, TextInput } from 'react-native'
import {AntDesign, MaterialIcons} from "@expo/vector-icons"
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { createMessage } from '../../graphql/mutations'
import { useNavigation } from '@react-navigation/native'
const InputBox = ({roomID}) => {
  const [message, setMessage] = useState("")
  const navigation = useNavigation()
  const handleSend = async () =>{
    const currentUser = await Auth.currentAuthenticatedUser()
    if(message){
        await API.graphql(graphqlOperation(createMessage,{
            input:{
                text: message,
                chatRoomID: roomID,
                senderID:  currentUser.attributes.sub
            }
        }))
        setMessage("")
    }
}
  return (
    <SafeAreaView
        edges={['bottom']}
        style={styles.rootContainer}>
        <AntDesign 
            name="plus" 
            size={20} 
            color="royalblue"
        />
    <TextInput
        placeholder='Type yout message'
        style={styles.input}
        value={message}
        onChangeText={setMessage}
    />
      <MaterialIcons
            name="send" 
            size={16} 
            color="white"
            style={styles.send}
            onPress={handleSend}
        />
    </SafeAreaView>
  )
}

export default InputBox

const styles = StyleSheet.create({
    rootContainer:{
        flexDirection:"row",
        backgroundColor:"whitesmoke",
        padding:5,
        alignItems:"center"
    },
    input: {
        flex: 1,
        paddingVertical: 5,
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 10,
        borderColor: "lightgray",
        borderWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10
    },
    send:{
        backgroundColor: "royalblue",
        padding:7,
        borderRadius: 20
    }

})