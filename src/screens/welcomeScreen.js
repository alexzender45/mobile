import React, { useEffect } from "react";
import { Image } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Signin");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/welcome.png")}
        style={styles.welcomeImage}
        resizeMode={"contain"}
      />
    </View>
  );
};

WelcomeScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8C191C",
  },
  welcomeImage: {
    width: 250,
    height: 250,
  },
});

export default WelcomeScreen;
