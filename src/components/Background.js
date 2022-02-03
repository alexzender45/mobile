import React from "react";
import { Image } from "react-native-elements";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Background = ({ back }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/background.png")}
        style={styles.image}
        resizeMode="stretch"
        title="background"
      />
      <TouchableOpacity back={back} onPress={back} style={styles.close}>
        <Ionicons name="arrow-back" size={25} style={{ color: "white" }} />
        <Text style={{ color: "white", fontSize: 16 }}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "60%",
    width: "100%",
    borderColor: "black",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  close: {
    margin: 5,
    position: "absolute",
    top: 0,
    left: 0,
    width: 50,
    height: 25,
    color: "tomato",
    marginTop: 30,
    marginLeft: 30,
    flexDirection: "row",
    color: "white",
  },
});

export default Background;
