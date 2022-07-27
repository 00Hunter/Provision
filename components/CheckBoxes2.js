import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import CheckBox from 'react-native-check-box'
import ProgressContext from '../hook/ProgressContext'


export default function CheckBoxes({Children,navigation}) {
  const counterContext=useContext(ProgressContext)
  const[checked,setChecked]=useState(false)
 

    const isChecked=()=>{
        if(checked){
            setChecked(false)
            counterContext.setCounter2(counterContext.counter2-1)
            
            // console.log(counterContext.counter2)
        }else{
            setChecked(true)
            counterContext.setCounter2(counterContext.counter2+1)
            // console.log(counterContext.counter2);
           
        }
        
    }
  return (
    <View>
       <CheckBox
    style={{ marginTop:20,width:100,}}
    onClick={isChecked}
    isChecked={checked}
    leftText={Children}
    />
    </View>
  )
}

const styles = StyleSheet.create({})