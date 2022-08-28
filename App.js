import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, keyboardType } from 'react-native';

export default function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const plus = () => {
    setResult(result => parseInt(number1) + parseInt(number2))
  }

  const minus = () => {
    setResult(result => number1 - number2)
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <View style={{flexDirection:"column", justifyContent: 'space-around'}}>
      <TextInput style={{width: 200, borderBottomColor: 'gray', borderWidth: 1}}
       onChangeText={numba1 => setNumber1(numba1)} value={number1} keyboardType= 'numeric'/>
      <TextInput style={{width: 200, borderBottomColor: 'gray', borderWidth: 1}}
       onChangeText={numba2 => setNumber2(numba2)} value={number2} keyboardType= 'numeric'/>
       </View>
       <View style={{flexDirection:"row", justifyContent: 'space-around'}}>
          <Button onPress={plus} title="+"/>
          <Button onPress={minus} title="-"/>

       </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
