import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input } from "react-native-elements";
import ButtonComponent from "../components/button";
import Link from "../components/link";
import Background from "../components/Background";
import { TouchableOpacity } from "react-native-gesture-handler";

const SigninScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState("#8C191C");
  return (
    <View style={styles.container}>
      <Background back={() => navigation.navigate("Welcome")} />
      <View style={styles.link}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Link title="Login" color={isFocused} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Link title="Signup" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          leftIconContainerStyle={{ marginLeft: 10 }}
          inputStyle={{ marginLeft: 10 }}
          autoCapitalize="none"
          autoCorrect={false}
          errorMessage="ENTER A VALID ERROR HERE"
        />
        <Input
          placeholder="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          leftIconContainerStyle={{ marginLeft: 10 }}
          inputStyle={{ marginLeft: 10 }}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <ButtonComponent
        title="Sign In"
        onPress={() => navigation.navigate("Home")}
      />
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Forgot Password?</Text>
      </View>
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    height: "60%",
    width: "100%",
    marginTop: "1%",
  },
  inputContainer: {
    marginTop: "10%",
    marginBottom: "10%",
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    marginVertical: 16,
    marginRight: 32,
  },
  link: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "7%",
  },
});

export default SigninScreen;
