import React from "react";
import { Button } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { navigate } from "../navigationRef";

const ButtonComponent = ({ title, navigateToToken }) => {
  return (
    <View style={styles.container}>
      <Button
        title={title}
        buttonStyle={styles.button}
        navigateToToken={navigateToToken}
        onPress={navigateToToken}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "10%",
    width: "100%",
    marginTop: "5%",
  },
  button: {
    backgroundColor: "#8C191C",
    borderRadius: 10,
    width: 350,
    height: 50,
  },
});

export default ButtonComponent;
