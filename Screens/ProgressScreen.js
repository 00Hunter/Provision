    import { StyleSheet, Text, View } from 'react-native'
    import React, { useContext, useEffect } from 'react'
    import Card from '../components/Card'
    import ProgressContext from '../hook/ProgressContext'
    
    export default function ProgressScreen({navigation}) {
        const counterContex=useContext(ProgressContext);
        const val1=counterContex.counter1
        const val2=counterContex.counter2
        

      return (
        <View style={{backgroundColor:"#ffffff",flex:1}}>
            <Text style={{color:"#b3b7ba",margin:10}}>Ahem's Progress</Text>
            {/* <View style={{margin:10,width:500}}> */}
            <Card value={val1} Name={"Physical"} color={"#53aac7"}/>
            {/* </View> */}
            <Card value={val2} Name={"Cognitive"} color={"#8cb07a"}/>
        </View>
      )
    }
    
    const styles = StyleSheet.create({})