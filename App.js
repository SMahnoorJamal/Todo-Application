/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Login from './src/screens/Login';
import { TaskScreen } from './src/screens/TaskSceen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewTaskScreen } from './src/screens/NewTaskScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (

    <Stack.Navigator>

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Welcome' }}
      />

      <Stack.Screen
        name="TaskScreen"
        component={TaskScreen} />

    </Stack.Navigator>
  );
};

const App = () => {

  return (

    <NavigationContainer>
          <Stack.Navigator
           screenOptions={{
            headerShown: false
          }}>

            <Stack.Screen
              name="Login"
              component={Login}
              // options={{ title: 'Welcome' }}
            />

            <Stack.Screen
              name="TaskScreen"
              component={TaskScreen} />

              <Stack.Screen
              name="NewTaskScreen"
              component={NewTaskScreen}/>

          </Stack.Navigator>
    </NavigationContainer>


  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;