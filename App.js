
import { StyleSheet, Text, View } from 'react-native';
import Progress from './components/Progress';
import TopNavigator from './Navigation/TopNAvigator';
import { NavigationContainer } from '@react-navigation/native';
import Card from './components/Card';
import MileStoneScreen from './Screens/MileStoneScreen';
import ProgressContext from './hook/ProgressContext';
import { useState } from 'react';


export default function App() {
  const [counter1,setCounter1]=useState(0)
  const [counter2,setCounter2]=useState(0)
  const [val,setval]=useState(0)
  return (
      <ProgressContext.Provider value={{counter1,setCounter1,counter2,setCounter2,setval}}>
       <NavigationContainer>
       <TopNavigator/>
       </NavigationContainer>
       </ProgressContext.Provider>
      // <View style={{top:100}}> 
      // {/* <Progress
      // height={5}
      //       backgroundColor={'grey'}
      //       completedColor={'blue'}
      //       percentage={'65%'}
      //       /> */}
      // {/* <Card Name={"Hello"}
      //       height={5}
      //       backgroundColor={'grey'}
      //       completedColor={'blue'}
      //       percentage={'65%'}/> */}
      //       <MileStoneScreen/>

      //  </View>
  );
}

const styles = StyleSheet.create({
 
});
