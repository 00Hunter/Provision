import React, {useState,useEffect} from 'react';
 
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
 
const Progress = ({
  navigation,
  percentage,
  height,
  completedColor,
}) => {
  const per=`${percentage*10}%`;
  const [getPercentage, setPercentage] = useState(per);
  console.log(per)
  const [getheight, setHeight] = useState(height);
  const [getCompletedColor, setCompletedColor] = useState(completedColor);
  

 
    useEffect(() => { setPercentage(per) }, [percentage]);

  return (
    <View>
      {/* <View style={{justifyContent: 'center'}}> */}
       
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: getheight,
            marginVertical: 10,
            borderRadius: 5,
            backgroundColor: getCompletedColor,
            position: 'absolute',
            bottom:20,
            // flex:1
          }}
        />
        
      {/* </View> */}
    </View>
  );
};
export default Progress;