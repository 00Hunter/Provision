import { StyleSheet, Text, View } from 'react-native'
import {React,useContext} from 'react'
import Progress from './Progress'
import ProgressContext from '../hook/ProgressContext'


export default function Card({Name,value,color,percentage}) {
    console.log(value,"helllo")

  return (
    <View style={styles.container}>
        <View style={{marginLeft:30,padding:15,margin:10,marginBottom:10}}>
        <Text style={{color:"#87929c",fontSize:25}}>{Name}</Text>
        </View>
        <View style={{top:50,width:"90%",marginLeft:5}}>
        <Progress
        height={5}
        completedColor={color}
        percentage={value}
        />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f5f5f5",
        height:150,
        borderRadius:10,
        width:"95%",
        alignSelf:"center",
        margin:10
    }
})