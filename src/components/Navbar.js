import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Header, Image } from "react-native-elements";

const Navbar = ({ navigation }) => {
  const renderImage = () => {
    return (
      <View style={styles}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ width: 100, height: 25 }}
          resizeMode="stretch"
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#E5E5E5"
        leftComponent={{
          icon: "menu",
          color: "#fff",
          onPress: () => navigation.openDrawer(),
          style: { height: 50, backgroundColor: "white" },
        }}
        centerComponent={() => renderImage()}
        rightComponent={{
          icon: "notifications",
          color: "#fff",
          onPress: () => navigation.navigate("Home"),
        }}
      />
    </View>
  );
};

Navbar.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default Navbar;
