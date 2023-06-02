import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
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
} from "native-base";

import ImageBlurLoading from "react-native-image-blur-loading";

const image = require("../assets/post2.png");
export default function FollowComponent() {
  return (
    <HStack
      my={5}
      px={3}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <ImageBlurLoading
        style={styles.sumnail}
        source={image}
        thumbnailSource={image}
      />
      <VStack flex={1} ml={3}>
        <Text color={"#232323"} fontSize={15} fontFamily={"SUITE-Bold"}>
          이월이
        </Text>
        <Text color={"#232323"} fontSize={13} fontFamily={"SUITE-Light"}>
          태어난일시 : 23.05.24
        </Text>
      </VStack>
      <Pressable px={4} borderRadius={7} py={1} backgroundColor={"#7FD1AE"}>
        <Text color={"#fff"} fontSize={14} fontFamily={"SUITE-Light"}>
          선물하기
        </Text>
      </Pressable>
    </HStack>
  );
}
const styles = StyleSheet.create({
  sumnail: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
