/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      status
      imageURL
      isOnline
      messages {
        items {
          id
          text
          chatRoomID
          senderID
          createdAt
          updatedAt
        }
        nextToken
      }
      chatRooms {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      status
      imageURL
      isOnline
      messages {
        items {
          id
          text
          chatRoomID
          senderID
          createdAt
          updatedAt
        }
        nextToken
      }
      chatRooms {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      status
      imageURL
      isOnline
      messages {
        items {
          id
          text
          chatRoomID
          senderID
          createdAt
          updatedAt
        }
        nextToken
      }
      chatRooms {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      text
      chatRoomID
      chatRoom {
        id
        messages {
          nextToken
        }
        members {
          nextToken
        }
        lastMessage {
          id
          text
          chatRoomID
          senderID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      senderID
      sender {
        id
        messages {
          nextToken
        }
        members {
          nextToken
        }
        lastMessage {
          id
          text
          chatRoomID
          senderID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      text
      chatRoomID
      chatRoom {
        id
        messages {
          nextToken
        }
        members {
          nextToken
        }
        lastMessage {
          id
          text
          chatRoomID
          senderID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      senderID
      sender {
        id
        messages {
          nextToken
        }
        members {
          nextToken
        }
        lastMessage {
          id
          text
          chatRoomID
          senderID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      text
      chatRoomID
      chatRoom {
        id
        messages {
          nextToken
        }
        members {
          nextToken
        }
        lastMessage {
          id
          text
          chatRoomID
          senderID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      senderID
      sender {
        id
        messages {
          nextToken
        }
        members {
          nextToken
        }
        lastMessage {
          id
          text
          chatRoomID
          senderID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
      id
      messages {
        items {
          id
          text
          chatRoomID
          senderID
          createdAt
          updatedAt
        }
        nextToken
      }
      members {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      lastMessage {
        id
        text
        chatRoomID
        chatRoom {
          id
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        senderID
        sender {
          id
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      messages {
        items {
          id
          text
          chatRoomID
          senderID
          createdAt
          updatedAt
        }
        nextToken
      }
      members {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      lastMessage {
        id
        text
        chatRoomID
        chatRoom {
          id
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        senderID
        sender {
          id
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
      id
      messages {
        items {
          id
          text
          chatRoomID
          senderID
          createdAt
          updatedAt
        }
        nextToken
      }
      members {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      lastMessage {
        id
        text
        chatRoomID
        chatRoom {
          id
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        senderID
        sender {
          id
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        name
        status
        imageURL
        isOnline
        messages {
          nextToken
        }
        chatRooms {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        messages {
          nextToken
        }
        members {
          nextToken
        }
        lastMessage {
          id
          text
          chatRoomID
          senderID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        name
        status
        imageURL
        isOnline
        messages {
          nextToken
        }
        chatRooms {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        messages {
          nextToken
        }
        members {
          nextToken
        }
        lastMessage {
          id
          text
          chatRoomID
          senderID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        name
        status
        imageURL
        isOnline
        messages {
          nextToken
        }
        chatRooms {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        messages {
          nextToken
        }
        members {
          nextToken
        }
        lastMessage {
          id
          text
          chatRoomID
          senderID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
