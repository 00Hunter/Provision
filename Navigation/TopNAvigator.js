import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MileStoneScreen from '../Screens/MileStoneScreen';
import ProgressScreen from '../Screens/ProgressScreen';

const Tab = createMaterialTopTabNavigator();

const TopNavigator=()=> {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarLabelStyle: { fontSize: 15 },
        tabBarItemStyle: { marginVertical:70 },
        tabBarStyle: { backgroundColor: '#0086d8',height:120 },
      }}
    >
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="MileStone" component={MileStoneScreen} />
    </Tab.Navigator>
  );
}

export default TopNavigator