/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createChatRoomUser = /* GraphQL */ `
  mutation CreateChatRoomUser(
    $input: CreateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    createChatRoomUser(input: $input, condition: $condition) {
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
export const updateChatRoomUser = /* GraphQL */ `
  mutation UpdateChatRoomUser(
    $input: UpdateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    updateChatRoomUser(input: $input, condition: $condition) {
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
export const deleteChatRoomUser = /* GraphQL */ `
  mutation DeleteChatRoomUser(
    $input: DeleteChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    deleteChatRoomUser(input: $input, condition: $condition) {
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
