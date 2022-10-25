import { FlatList, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import Contact from '../components/Contact'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { listUsers } from '../graphql/queries'

const ContactsScreen = () => {
  const [users, setUsers] = useState([])
  const getAllUsers = async () =>{
    try{
      const currentUser = await Auth.currentAuthenticatedUser()
      const rawUsersData = await API.graphql(graphqlOperation(listUsers, {
        filter:{
          id: {ne: currentUser?.attributes?.sub}
        }
      }))
      const usersData = rawUsersData?.data?.listUsers?.items
      setUsers([...usersData])
    }catch(err){
      console.log(err)
    }
    
  }

  useEffect(()=>{
    getAllUsers()
  },[])
  return (
    <FlatList
    data={users}
    renderItem={({item})=> <Contact contact={item}/>}
    style={{
      backgroundColor: "white"
    }}
  />
  )
}

export default ContactsScreen

const styles = StyleSheet.create({})