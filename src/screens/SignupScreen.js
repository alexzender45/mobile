import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import ButtonComponent from "../components/button";
import Link from "../components/link";
import Background from "../components/Background";

const SignupScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState("#8C191C");
  const navigate = () => {
    navigation.navigate("Token");
  };
  return (
    <View style={styles.container}>
      <Background back={() => navigation.navigate("Signin")} />
      <View style={styles.link}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Link title="Login" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Link color={isFocused} title="Signup" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Fullname"
          leftIcon={{ type: "font-awesome", name: "user" }}
          leftIconContainerStyle={{ marginLeft: 10 }}
          required
        />
        <Input
          placeholder="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          leftIconContainerStyle={{ marginLeft: 10 }}
          inputStyle={{ marginLeft: 10 }}
          autoCapitalize="none"
          autoCorrect={false}
          required
        />
        <Input
          placeholder="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          leftIconContainerStyle={{ marginLeft: 10 }}
          inputStyle={{ marginLeft: 10 }}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          required
        />
        <Input
          placeholder="Confirm Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          leftIconContainerStyle={{ marginLeft: 10 }}
          inputStyle={{ marginLeft: 10 }}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          required
        />
      </View>
      <ButtonComponent title="Continue" navigateToToken={navigate} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signin");
        }}
      >
        <View style={styles.signinTextCont}>
          <Text style={styles.signupText}>Already Have An Account? Sigin</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
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
    marginTop: "5%",
  },
  signinTextCont: {
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

export default SignupScreen;
