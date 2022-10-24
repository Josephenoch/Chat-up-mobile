import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation';
import {  Amplify, API, Auth, graphqlOperation} from 'aws-amplify';
import awsmobile from "./src/aws-exports"
import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';
import { useEffect } from 'react';
import { getUser } from './src/graphql/queries';

Amplify.configure({...awsmobile, Analytics:{disabled: true}})

const App = () => {
  const handleAuth = async () =>{
    try{
      const currentUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      const user = await API.graphql(graphqlOperation(getUser, {
        id: currentUser?.attributes?.sub
      }))
      console.log(user)
    }
    catch(err){
      console.error(err)
    }
  }
  useEffect(()=>{
    handleAuth()
  },[])
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