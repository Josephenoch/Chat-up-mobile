import { StyleSheet, Text, View } from 'react-native';
import ChatScreen from './src/screens/ChatScreen';
import ChatsScreen from './src/screens/ChatsScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <ChatScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop:40
  },
});
