// Skończyłem na check1 oraz jego checkboxie. Ogarnij błąd z checkami

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { CheckBox } from "@rneui/themed";
// Checkbox jest zaimportowany z https://reactnativeelements.com/

// TODO: Rozwiązać problem dodawania hobby
// ? Rozwiązać przez checkbox?
// ? A może zrobić zwyczajne TODO?
// TODO: Możliwość wybierania płci
// *

export default function Form() {
  // ! Pojedyncze dane
  const [name, setName] = useState("");
  const [subname, setSubname] = useState("");
  const [age, setAge] = useState(null);
  const [adress, setAdress] = useState({
    city: "",
    street: "",
    apartment: null,
  });
  const [selectedDate, setSelectedDate] = useState("");
  // const [check1, setCheck1] = useState({
  //   checked: false,
  //   status: "",
  // });
  // ! Obiekt ze wszystkimi danymi. Powyżej pojedyncze dane
  const [userData, setUserData] = useState({
    name: name,
    subname: subname,
    age: age,
    details: {
      city: adress.city,
      street: adress.street,
      apartment: adress.apartment,
    },
    date: selectedDate,
  });

  // FUNKCJE
  // Ustawienie wszystkich danych
  const handleViewingData = () => {
    setUserData({
      name,
      subname,
      age,
      details: {
        ...adress,
        city: adress.city,
        street: adress.street,
        apartment: adress.apartment,
      },
      date: selectedDate,
    });
  };
  const handleHobby = () => {};

  return (
    <View>
      {/* Intro */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Witaj w formularezu rejestracji</Text>
      </View>
      {/* Imię */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Wpisz swoje imię"
          onChangeText={(text) => setName(text)}
          value={name}
          style={styles.inpucik}
        />
      </View>
      {/* Naziwsko */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Wpisz swoje nazwisko"
          onChangeText={(text) => setSubname(text)}
          value={subname}
          style={styles.inpucik}
        />
      </View>
      {/* Wiek */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Wpisz swój wiek"
          onChangeText={(text) => setAge(text)}
          value={age}
          style={styles.inpucik}
        />
      </View>
      {/* Adres */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Miejscowość"
          onChangeText={(text) => {
            setAdress({ ...adress, city: text });
          }}
          value={adress.city}
          style={styles.inpucik}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ulica"
          onChangeText={(text) => {
            setAdress({ ...adress, street: text });
          }}
          value={adress.street}
          style={styles.inpucik}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Mieszkanie"
          onChangeText={(text) => {
            setAdress({ ...adress, apartment: text });
          }}
          value={adress.apartment}
          style={styles.inpucik}
        />
      </View>
      {/* Wybór daty */}
      <DatePicker
        mode="calendar"
        options={{
          headerAnimationDistance: 8,
        }}
        onSelectedChange={(date) => setSelectedDate(date)}
      />
      {/* <CheckBox
        center
        title="Click Here"
        checked={check1}
        onPress={handleHobby}
      /> */}

      {/* Button - wysyłanie danych */}
      <TouchableOpacity onPress={handleViewingData} style={styles.confirmBtn}>
        <Text style={styles.confirmBtnText}>Wyślij</Text>
      </TouchableOpacity>

      {/* Wyświetlanie danych */}
      <Text>Imię: {userData.name}</Text>
      <Text>Nazwisko: {userData.subname}</Text>
      <Text>Wiek: {userData.age}</Text>
      <Text>Miasto: {userData.details.city}</Text>
      <Text>Warszawa: {userData.details.street}</Text>
      <Text>Mieszkanie: {userData.details.apartment}</Text>
      <Text>Data urodzenia: {userData.date}</Text>
      {/* <Text>Zainteresowania: {check1}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    marginTop: 40,
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
  },
  inputContainer: {
    justifyContent: "center",
    marginTop: "4%",
  },
  inpucik: {
    fontSize: 15,
    backgroundColor: "white",
    width: "80%",
    textAlign: "center",
    marginLeft: "10%",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
  },
  confirmBtn: {
    // elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    maxWidth: "70%",
    alignSelf: "center",
    paddingHorizontal: 30,
  },
  confirmBtnText: {
    color: "white",
    fontWeight: "bold",
  },
});
