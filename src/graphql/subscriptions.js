/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
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
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
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
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
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
  subscription OnCreateChatRoomUser(
    $filter: ModelSubscriptionChatRoomUserFilterInput
  ) {
    onCreateChatRoomUser(filter: $filter) {
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
  subscription OnUpdateChatRoomUser(
    $filter: ModelSubscriptionChatRoomUserFilterInput
  ) {
    onUpdateChatRoomUser(filter: $filter) {
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
  subscription OnDeleteChatRoomUser(
    $filter: ModelSubscriptionChatRoomUserFilterInput
  ) {
    onDeleteChatRoomUser(filter: $filter) {
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
