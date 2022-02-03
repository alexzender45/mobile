import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Link = ({ title, color }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color:color}}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    marginLeft: "10%",
    marginRight: "10%",
  },
});

export default Link;
