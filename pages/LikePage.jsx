import React from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
} from "native-base";
import HeaderComponent from "../components/HeaderComponent";
export default function LikePage({ navigation, route }) {
  return (
    <Center flex={1} justifyContent={"flex-start"} backgroundColor={"#fff"}>
      <HeaderComponent navigation={navigation} route={route} />
      <Text>라이크페이지</Text>
    </Center>
  );
}
