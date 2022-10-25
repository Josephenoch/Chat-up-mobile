import { API, Auth, graphqlOperation } from "aws-amplify"

export const getUsersRoom = async (contactID) =>{
    const currentUser = await Auth.currentAuthenticatedUser()
    const response = await API.graphql(graphqlOperation(myChatRooms, {
        id: currentUser?.attributes?.sub
    }))
    const chatRooms = response?.data?.getUser?.chatRooms?.items || []
    const chatRoomIndex = chatRooms.findIndex(item => {
        const userFound = item.chatRoom.members.items.find(el =>{ 
            return el.user.id === contactID
        })
        if(userFound !== -1){
            return true
        }
    });
    if(chatRoomIndex !== -1){
        const chatRoom = chatRooms[chatRoomIndex]?.chatRoom?.id
        return chatRoom
    }
    
}

const myChatRooms = /* GraphQL */`
query GetUser($id: ID!) {
    getUser(id: $id) {
      chatRooms {
        items {                          
          chatRoom {
            members {
              items {
                user {
                  id
                }
              }
            }
            id
          }
        }
      }
    }
  }
  
`