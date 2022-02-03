import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import WelcomeScreen from "./src/screens/welcomeScreen";
import TokenScreen from "./src/screens/TokenScreen";
import ViewPost from "./src/components/Post";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Post: ViewPost,
    Welcome: WelcomeScreen,
    Token: TokenScreen,
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
