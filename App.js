import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import Add_Post from './src/components/Add_Post';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import Add_Group_Conversation from './src/components/Add_Group_Conversation';
import Conversation from './src/components/Conversation';
import Comments from './src/components/Comments';

const Stack = createNativeStackNavigator();
// const headerHeight = useHeaderHeight();

function StackFunction() {
  return (
    <Stack.Navigator initialRouteName="Conversation">
      <Stack.Screen name="Conversation" component={Conversation}
        options={{ title: 'Conversation', headerShown: false, }} />
      <Stack.Screen name="AddPost" component={Add_Post}
        options={{ title: 'Add Post', headerShown: true, }} />
          <Stack.Screen name="Comments" component={Comments}
        options={{ title: 'Comments', headerShown: false,
        headerStyle:{
          elevation: 0 
        }
        }} />
      <Stack.Screen name="Add_Group_Conversation" component={Add_Group_Conversation}
        options={{
          title: 'Add_Group_Conversation', headerShown: true,
          headerStyle: {
            // backgroundColor: '#f4511e',
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            elevation: 0  // android
          },
        }} />
    </Stack.Navigator>
  )
}

export default function App() {
  // console.log("Header Height: ", headerHeight)
  return (
    // <View style={styles.container}>
    //   <Text style={{fontSize:16}} >Welcome to React app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <ApplicationProvider {...eva} theme={eva.light}>

      <NavigationContainer>
        <StackFunction />
      </NavigationContainer>

    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
