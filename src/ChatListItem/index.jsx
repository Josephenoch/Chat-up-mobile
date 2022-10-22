import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ChatListItem = () => {
  return (
    <View style={styles.rootContainer}>
      <Image source={{
        uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
        }}
        style={styles.image}
        />
      <View style={styles.textContainer}>
        <View style={styles.nameTime}>
          <Text style={styles.name} numberOfLines={1}>James Doe</Text>
          <Text style={styles.subtitle}>11:30 PM</Text>
        </View>
        <Text numberOfLines={2} style={styles.subtitle}>Hello World</Text>
      </View>
    </View>
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