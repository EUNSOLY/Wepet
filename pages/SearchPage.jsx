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
export default function SearchPage({ navigation, route }) {
  return (
    <Center flex={1} backgroundColor={"#fff"} justifyContent={"flex-start"}>
      <HeaderComponent navigation={navigation} route={route} />
      <Text>SearchPage.</Text>
    </Center>
  );
}
