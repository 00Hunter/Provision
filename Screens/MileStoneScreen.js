import { StyleSheet, Text, View,Button } from 'react-native'
import {React,useState} from 'react'

import CheckBoxes from '../components/CheckBoxes';
import CheckBoxes2 from '../components/CheckBoxes2' 



export default function MileStoneScreen() {
    
   
    
  return (
    <View style={{marginRight:300,marginVertical:10}}>
        <CheckBoxes Children={"task1"}/>
        <CheckBoxes Children={"task2"} />
        <CheckBoxes Children={"task3"}/>
        <CheckBoxes Children={"task4"}/>
        <CheckBoxes Children={"task5"}/>
        <CheckBoxes Children={"task6"}/>
        <CheckBoxes Children={"task7"}/>
        <CheckBoxes Children={"task8"}/>
        <CheckBoxes Children={"task9"}/>
        <CheckBoxes Children={"task10"}/>

         <CheckBoxes2 Children={"task10"}/>
        <CheckBoxes2 Children={"task10"}/>
        <CheckBoxes2 Children={"task10"}/>
        <CheckBoxes2 Children={"task10"}/> 
        

      
    </View>
  )
}

const styles = StyleSheet.create({})