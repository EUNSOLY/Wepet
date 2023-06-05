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
export default function ShopingmallPage({ navigation, route }) {
  return (
    <Center flex={1} justifyContent={"flex-start"} backgroundColor={"#fff"}>
      <HeaderComponent navigation={navigation} route={route} />
      <Text flex={1} w={"100%"} textAlign={"center"}>
        쇼핑몰 준비중입니다
      </Text>
    </Center>
  );
}
