import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input } from "react-native-elements";
import ButtonComponent from "../components/button";
import Link from "../components/link";
import Background from "../components/Background";

const TokenScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Background back={() => navigation.navigate("Signup")} />
      <Link />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Token"
          leftIcon={{ type: "font-awesome", name: "key" }}
          inputStyle={{ marginLeft: 10 }}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <ButtonComponent
        title="Sign Up"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

TokenScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    height: "60%",
    width: "100%",
    marginTop: "1%",
  },
  inputContainer: {
    marginTop: "15%",
    marginBottom: "25%",
  },
});

export default TokenScreen;
