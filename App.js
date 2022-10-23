import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation';
import {  Amplify} from 'aws-amplify';
import awsmobile from "./src/aws-exports"
import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';
Amplify.configure({...awsmobile, Analytics:{disabled: true}})
const App = () => {
  return ( 
    <View style={styles.container}>
      <Navigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App)