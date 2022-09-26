import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TaskScreen } from '../screens/TaskSceen';
import { NewTaskScreen } from '../screens/NewTaskScreen';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TaskScreen" component={TaskScreen} />
      <Tab.Screen name="NewTaskScreen" component={NewTaskScreen} />
    </Tab.Navigator>
  );
}