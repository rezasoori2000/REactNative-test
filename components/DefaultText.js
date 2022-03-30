import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = (props) => {
  return <Text style={styles.dafaultStyle}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  dafaultStyle: {
    fontFamily: "open-sans",
  },
});

export default DefaultText;
