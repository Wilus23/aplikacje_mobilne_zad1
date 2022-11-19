import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
//zadanie 1
// import Layout1 from "./components/z1/Layout1";
// import Layout2 from "./components/z1/Layout2";
//zadanie 2
// import Calc from "./components/z2/Calc";
// zadanie3
import Form from "./components/zad3/Form";

export default function App() {
  return (
    <View>
      <StatusBar />
      <ScrollView>
        <Form />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  layout1: {
    margin: 100,
  },
});
