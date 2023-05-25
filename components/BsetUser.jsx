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
  StatusBar,
} from "native-base";
import ImageBlurLoading from "react-native-image-blur-loading";
import { useState, useEffect } from "react";

import testImg from "../assets/user1.png";
export default function BsetUser({ navigation, route }) {
  return (
    <Center px={1}>
      <Box w={"65px"} h={"65px"} borderRadius={50} overflow={"hidden"}>
        <ImageBlurLoading
          thumbnailSource={testImg}
          source={testImg}
          style={styles.image}
        />
      </Box>
    </Center>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
