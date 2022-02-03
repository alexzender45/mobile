import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Image, Avatar } from "react-native-elements";

const Story = ({ navigation }) => {
  const renderImage = () => {
    return (
      <View style={styles.container}>
        <View style={styles.inner}>
          <Avatar
            rounded
            imageProps={{ resizeMode: "cover" }}
            source={require("../../assets/images/logo.png")}
            containerStyle={styles.avatar}
          />
          <Text style={styles.text}>My Story</Text>
        </View>
        <View style={styles.inner}>
          <Avatar
            rounded
            imageProps={{ resizeMode: "cover" }}
            source={require("../../assets/images/logo.png")}
            containerStyle={styles.avatar}
          />
          <Text style={styles.text}>My Story</Text>
        </View>
        <View style={styles.inner}>
          <Avatar
            rounded
            imageProps={{ resizeMode: "cover" }}
            source={require("../../assets/images/logo.png")}
            containerStyle={styles.avatar}
          />
          <Text style={styles.text}>My Story</Text>
        </View>
        <View style={styles.inner}>
          <Avatar
            rounded
            imageProps={{ resizeMode: "cover" }}
            source={require("../../assets/images/bot.png")}
            containerStyle={styles.avatar}
          />
          <Text style={styles.text}>My Story</Text>
        </View>
        <View style={styles.inner}>
          <Avatar
            rounded
            imageProps={{ resizeMode: "cover" }}
            source={require("../../assets/images/bot.png")}
            containerStyle={styles.avatar}
          />
          <Text style={styles.text}>My Story</Text>
        </View>
      </View>
    );
  };
  return renderImage();
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 3,
    backgroundColor: "#fff",
  },
  inner: {
    flex: 1,
    flexDirection: "column",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "red",
  },
});

export default Story;
