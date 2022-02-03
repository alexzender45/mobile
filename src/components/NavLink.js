import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Spacer from "./spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routeName)}
      style={styles.navLink}
    >
        <Spacer>
            <Text style={styles.navLinkText}>{text}</Text>
        </Spacer>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  navLink: {
      color: 'blue'
    },
});

export default withNavigation(NavLink);
