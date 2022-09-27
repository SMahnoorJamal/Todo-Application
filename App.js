

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
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Tabs from './src/Navigation/tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        screenOptions={{
          tabBarLabel: 'Task',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="add-circle" size={25} />

          ),
        }} />

      <Tab.Screen
        name="Add Task"
        component={NewTaskScreen} />

      <Tab.Screen
        name="Location"
        component={Reminder} />
    </Tab.Navigator>
  );
}

const App = () => {

  return (

    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Login"
          component={Login} />

        <Stack.Screen
          name="Home"
          component={Home} />
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