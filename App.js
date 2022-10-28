import React from "react";
import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
//zadanie 1
// import Layout1 from "./components/z1/Layout1";
// import Layout2 from "./components/z1/Layout2";
//zadanie 2
import Calc from "./components/z2/Calc";

export default function App() {
  return (
    <View>
      <StatusBar />
      <Calc />
    </View>
  );
}

const styles = StyleSheet.create({
  layout1: {
    marginTop: 100,
  },
});
