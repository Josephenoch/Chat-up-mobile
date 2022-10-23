import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"
import {useNavigation} from "@react-navigation/native"
dayjs.extend(relativeTime)


const Contact = ({
 contact
}) => {
  const navigation = useNavigation()
  return (
    <Pressable
      style={styles.rootContainer}
      onPress={()=>navigation.navigate("Chat", {id: contact.id, name: contact.name})}
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