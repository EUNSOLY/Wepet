import React from "react";
import { StyleSheet } from "react-native";

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
} from "native-base";
import ImageBlurLoading from "react-native-image-blur-loading";

import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
const logo = require("../assets/logo.png");
export default function HeaderComponent({ navigation, route }) {
  const goHome = () => {
    navigation.navigate("MainPage");
    console.log("홈");
  };
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <Center w={"100%"} backgroundColor={"#fff"}>
      <Box safeArea />
      <HStack
        w={"100%"}
        paddingX={8}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {route.name === "MainPage" ? null : (
          <IconButton
            onPress={goBack}
            backgroundColor={"#ffffff00"}
            justifyContent={"center"}
            alignItems={"center"}
            w={7}
          >
            <MaterialCommunityIcons
              name="chevron-left"
              size={24}
              color="#C8C8C8"
            />
          </IconButton>
        )}

        <Button onPress={goHome} backgroundColor={"#ffffff00"}>
          <ImageBlurLoading
            thumbnailSource={logo}
            source={logo}
            style={styles.logoImg}
          />
        </Button>
        <FontAwesome name="bell" size={24} color="#FED688" />
      </HStack>
    </Center>
  );
}
const styles = StyleSheet.create({
  logoImg: {},
});
