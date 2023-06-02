import React from "react";

// 설치한 스택 네이게이션 라이브러리 가져오기
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import TabNavigation from "./TabNavigation";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import TipPage from "../pages/TipPage";
import AnimalDetailPage from "../pages/AnimalDetailPage";

const StackNavigator = ({ data, animalData }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigation">
        {(props) => (
          <TabNavigation {...props} data={data} animalData={animalData} />
        )}
      </Stack.Screen>

      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="SignInPage" component={SignInPage} />
      <Stack.Screen name="TipPage" component={TipPage} />
      <Stack.Screen name="AnimalDetailPage" component={AnimalDetailPage} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
