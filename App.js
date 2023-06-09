import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme } from "native-base";

// import {Ionicons} from "@"
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });

import LoadingPage from "./pages/LoadingPage";
import { useState, useEffect } from "react";
import StackNavigator from "./navigation/StackNavigation";
import { useFonts } from "expo-font";

// 데이터바인딩
import testData from "./data/testData";
import animal from "./data/AnimalhospiceData.json";

export default function App() {
  const [data, setData] = useState([]);
  const [animalData, setAnimalData] = useState([]);
  const [userData, setUserData] = useState([...testData].slice(0, 5));
  const [ready, setReady] = useState(false);
  const [font] = useFonts({
    "SUITE-Light": require("./assets/fonts/SUITE-Light.ttf"),
    "SUITE-Bold": require("./assets/fonts/SUITE-Bold.ttf"),
  });

  useEffect(() => {
    setData(testData);
    setAnimalData(animal);
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);
  if (!font || !ready) {
    return (
      <NativeBaseProvider>
        <LoadingPage />
      </NativeBaseProvider>
    ); // 로딩 중이므로 아무것도 렌더링하지 않음
  } else {
    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <StackNavigator data={data} animalData={animalData} />
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
