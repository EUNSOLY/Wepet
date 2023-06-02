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
import AnimalList from "../components/AnimalList";
export default function AnimalhospicePage({ navigation, route, animalData }) {
  return (
    <ScrollView backgroundColor={"#fff"}>
      <HeaderComponent navigation={navigation} route={route} />
      <Box px={5}>
        <Text>동물병원</Text>
        {animalData.map((item, i) => {
          return (
            <AnimalList
              item={item}
              key={i}
              navigation={navigation}
              route={route}
            />
          );
        })}
      </Box>
    </ScrollView>
  );
}
