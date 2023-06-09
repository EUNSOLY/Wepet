import { StyleSheet, Dimensions } from "react-native";
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
  ScrollView,
  Pressable,
  Flex,
} from "native-base";
import HeaderComponent from "../components/HeaderComponent";
export default function TipPage({ navigation, route }) {
  return (
    <ScrollView backgroundColor={"#fff"}>
      <HeaderComponent navigation={navigation} route={route} />
      <Center>
        <Text>꿀팁을 준비중입니다.</Text>
      </Center>
    </ScrollView>
  );
}
