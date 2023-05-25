import React from "react";

// 설치한 스택 네이게이션 라이브러리 가져오기
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import TabNavigation from "./TabNavigation";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="SignInPage" component={SignInPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
