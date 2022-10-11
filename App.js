import React from "react";
import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";

export default function App() {
  return (
    <View>
      <StatusBar />
      <Layout1 />
      <Layout2 />
    </View>
  );
}

const styles = StyleSheet.create({
  layout1: {
    marginTop: 100,
  },
});
