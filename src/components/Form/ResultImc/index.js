import React from "react"
import { StyleSheet, Text, View } from 'react-native';

export default function ResultImc(props){
 return (
    <View>
    <Text>{props.MessageImc}</Text>
    <Text>{props.ResultImc}</Text>
  </View>  
 )   
}