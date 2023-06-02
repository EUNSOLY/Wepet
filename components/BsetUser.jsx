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
  Pressable,
} from "native-base";
import ImageBlurLoading from "react-native-image-blur-loading";
import { useState, useEffect } from "react";

export default function BsetUser({ navigation, route, item }) {
  console.log(item);
  const goFeed = () => {
    navigation.navigate("FeedPage", { user: item });
  };
  return (
    <Pressable onPress={goFeed}>
      <Center px={1}>
        <Box w={"65px"} h={"65px"} borderRadius={50} overflow={"hidden"}>
          <ImageBlurLoading
            thumbnailSource={{ uri: item.image }}
            source={{ uri: item.image }}
            style={styles.image}
          />
        </Box>
        <Text fontFamily={"SUITE-Light"} fontSize={11}>
          {item.name}
        </Text>
      </Center>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
