

import React from 'react';
import {
  StyleSheet, Image, View
} from 'react-native';
import Login from './src/screens/Login';
import { TaskScreen } from './src/screens/TaskSceen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewTaskScreen } from './src/screens/NewTaskScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Reminder } from './src/popups/Reminder';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Location } from './src/screens/Location';
// import Tabs from './src/Navigation/tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Task1"
        component={TaskScreen}
        navigationOptions={{
          tabBarLabel: 'Task2',
          tabBarIcon: () =>  <AntDesign name="addfile" size={25} />
        }}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={require('../todoApplication/src/assets/icons/task.png')}
                  resizeMode="contain"
                  style={{ width: 28 }}
                />
              </View>
            );
          },
        }} />

      <Tab.Screen
        name="Add Task"
        component={NewTaskScreen}
        navigationOptions={{
          visible: true
        }}
        screenOptions={true}
        setOptions= {true} 
        options={{
        tabBarLabel: ({}) => {false},
          tabBarIcon: ({focused})=> {
            return (
              <View>
                <Image
                  source={require('../todoApplication/src/assets/icons/addIcon.jpg')}
                  resizeMode="contain"
                  style={{ width: 60, bottom: 9}}
                />
              </View>
            );
          }
        }} />

      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={require('../todoApplication/src/assets/icons/location.png')}
                  resizeMode="contain"
                  style={{ width: 28 }}
                />
              </View>
            );
          },
        }}
        // navigationOptions= {{
        //   tabBarOptions: { showIcon: true },
        //   tabBarIcon: ({ tintColor }) => {
        //             return (<Image
        //                 style={{ width: 50, height: 50 }}
        //                 source={{ uri: "https://facebook.github.io/react/img/logo_og.png" }}/>);}
        //   }}
      />
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