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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Reminder } from './src/popups/Reminder';
import Tabs from './src/Navigation/tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (

    <Stack.Navigator>

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Welcome' }}
      />

    </Stack.Navigator>
  );
};

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
const App = () => {

  return (

    <NavigationContainer>

      {/* <Tab.Navigator
       screenOptions={{
        headerShown: false
      }}>
       <Tab.Screen name="HomeStackScreen" component={HomeStackScreen} /> 
        <Tab.Screen  name="Task" component={TaskScreen} />
        <Tab.Screen name="Location" component={NewTaskScreen} />
      </Tab.Navigator> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="TaskScreen"
          component={TaskScreen} />

        <Stack.Screen
          name="Reminder"
          component={Reminder} />

        <Stack.Screen
          name="NewTaskScreen"
          component={NewTaskScreen} />

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