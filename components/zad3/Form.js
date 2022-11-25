// Skończyłem na check1 oraz jego checkboxie. Ogarnij błąd z checkami

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { CheckBox, ButtonGroup } from "@rneui/themed";
// Checkbox jest zaimportowany z https://reactnativeelements.com/

// TODO: OBEJRZ CO PONIŻEJ
// ! 159 linijka, zrobić coś z obiektem, tylko nie wiem co. Chyba nie można tego zrobić przez objekt.
// TODO: Rozwiązać problem dodawania hobby
// ? Rozwiązać przez checkbox?
// ? A może zrobić zwyczajne TODO?
// TODO: Możliwość wybierania płci
// *

export default function Form() {
  // ! Pojedyncze dane
  /* TODO: 
    1. imię
    2. nazwisko
    3. wiek
    4. adres
    5. data
    6. płeć
    ! 7. zainteresowania
  */
  const [name, setName] = useState("");
  const [subname, setSubname] = useState("");
  const [age, setAge] = useState(null);
  const [adress, setAdress] = useState({
    city: "",
    street: "",
    apartment: null,
  });
  const [selectedDate, setSelectedDate] = useState("");
  // Płeć
  const [gender, setGender] = useState(0);
  const [statusGender, setStatusGender] = useState(0);

  const [check1, setCheck1] = useState(false);
  const [football, setFootball] = useState("");
  const [check2, setCheck2] = useState(false);
  const [volleyball, setVolleyball] = useState("");
  const [check3, setCheck3] = useState(false);
  const [basketball, setBasketball] = useState("");

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

  // Po przeładowaniu stanu, wykonują się następujące rzeczy dla sportów:
  useEffect(() => {
    if (check1 === true) {
      setFootball("Piłka nożna");
    } else {
      setFootball("");
    }
    if (check2 === true) {
      setVolleyball("Siatkówka");
    } else {
      setVolleyball("");
    }
    if (check3 === true) {
      setBasketball("Koszykówka");
    } else {
      setBasketball("");
    }
  }, [check1, check2, check3]);

  // ! FUNKCJE, logika aplikacji
  //* Ustawienie wszystkich danych
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
      gender: statusGender,
    });
  };
  // * Obsługa płci

  // * Obsługa hobby
  const handleHobby = () => {
    setCheck1(!check1);
  };

  // *! Poniżej widoki:
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

      {/* Button - wysyłanie danych */}

      {/* Wybór płci */}
      <ButtonGroup
        buttons={["Kobieta", "Mężczyzna"]}
        selectedIndex={gender}
        onPress={(value) => {
          setGender(value);
          if (gender < 1) {
            setStatusGender("Mężczyzna");
          } else {
            setStatusGender("Kobieta");
          }
        }}
        containerStyle={{ marginBottom: 20 }}
      />
      <CheckBox
        center
        title="Piłka nożna"
        checked={check1}
        onPress={handleHobby}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
      />
      <CheckBox
        center
        title="Siatkówka"
        checked={check2}
        onPress={() => setCheck2(!check2)}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
      />
      <CheckBox
        center
        title="Koszykówka"
        checked={check3}
        onPress={() => setCheck3(!check3)}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
      />
      <TouchableOpacity onPress={handleViewingData} style={styles.confirmBtn}>
        <Text style={styles.confirmBtnText}>Wyślij</Text>
      </TouchableOpacity>
      {/* WYŚWIETLANIE DANYCH */}
      <Text>Imię: {userData.name}</Text>
      <Text>Nazwisko: {userData.subname}</Text>
      <Text>Wiek: {userData.age}</Text>
      <Text>Miasto: {userData.details.city}</Text>
      <Text>Warszawa: {userData.details.street}</Text>
      <Text>Mieszkanie: {userData.details.apartment}</Text>
      <Text>Data urodzenia: {userData.date}</Text>
      <Text>Płeć: {userData.gender}</Text>
      <Text>Zainteresowania: {football}</Text>
      <Text>Zainteresowania: {volleyball}</Text>
      <Text>Zainteresowania: {basketball}</Text>

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
