import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function Form() {
    const [name, setName] = useState("")
    const [subname, setSubname] = useState("")
    const [age, setAge] = useState(0);
    const [userData, setUserData] = useState({})

    const handleViewingData = () => {
        setUserData({name, subname, age})
    }
  return (
    <View>
        {/* Intro */}
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Witaj w formularzu rejestracji</Text>
        </View>
        {/* Imię */}
      <View style={styles.inputContainer}>
        <TextInput
        placeholder="Wpisz swoje imię"
        onChangeText={(text)=>setName(text)}
        value={name}
        style={styles.inpucik}
        />
      </View>
      {/* Naziwsko */}
      <View style={styles.inputContainer}>
        <TextInput
        placeholder="Wpisz swoje nazwisko"
        onChangeText={(text)=>setSubname(text)}
        value={subname}
        style={styles.inpucik}
        />
     </View>
      {/* Wiek */}
      <View style={styles.inputContainer}>
        <TextInput
        placeholder="Wpisz swój wiek"
        onChangeText={(text)=>setAge(text)}
        value={age}
        style={styles.inpucik}
        />
     </View>
     {/* Button */}
     <Button onPress={handleViewingData}></Button>
     <Text>{userData}</Text>
     </View>
  );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        marginTop: 40,
    },
    welcomeText: {
        fontSize: 20,
        textAlign: "center"
    },
    inputContainer: {
        justifyContent: "center",
        marginTop: "4%",
    },
    inpucik:{
        fontSize: 24,
        backgroundColor: "white",
        width: "80%",
        textAlign: "center",
        marginLeft: "10%",
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
    },
})