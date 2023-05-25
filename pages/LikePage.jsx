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
    <Center>
      <HeaderComponent navigation={navigation} route={route} />
      <Text>라이크인데?</Text>
    </Center>
  );
}
