/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
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
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        chatRoomID
        user {
          id
          name
          status
          imageURL
          isOnline
          createdAt
          updatedAt
        }
        chatRoom {
          id
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
