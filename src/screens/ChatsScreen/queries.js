export const listUserChatRooms = /* GraphQL */`
query GetUser($id: ID!) {
    getUser(id: $id) {
      chatRooms {
        items {
          chatRoom {
            members {
              items {
                user {
                  id
                  imageURL
                  isOnline
                  name
                  status
                }
              }
            }
            id
            lastMessage {
              text
              id
              createdAt
            }
          }
        }
      }
    }
  }
  
`