import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import CheckBox from 'react-native-check-box'
import ProgressContext from '../hook/ProgressContext'



export default function CheckBoxes({Children,navigation}) {
  const counterContext=useContext(ProgressContext)
  const[checked,setChecked]=useState(false)
  
  
    const ifChecked=()=>{
      
        if(checked){
            setChecked(false)
            counterContext.setCounter1(counterContext.counter1-1)
            // console.log(counterContext.counter1);
            
        }else{
          setChecked(true)
          counterContext.setCounter1(counterContext.counter1+1)
            // console.log(counterContext.counter1);
          
        }
        
    }
  return (
    <View style={{width:100,padding:5}}>  
       <CheckBox
    onClick={ifChecked}
    isChecked={checked}
    leftText={Children}
    />
    
    </View>
  )
}

const styles = StyleSheet.create({})