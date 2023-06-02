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
import { useState } from "react";
import ImageBlurLoading from "react-native-image-blur-loading";
const userImage = require("../assets/post.png");
export default function CommemtComponent({ navigation, route }) {
  return (
    <VStack w={"100%"} alignItems={"flex-start"}>
      <HStack alignItems={"center"}>
        <ImageBlurLoading
          thumbnailSource={userImage}
          source={userImage}
          style={styles.sumnail}
        />
        <Text fontFamily={"SUITE-Light"} ml={2}>
          user Name
        </Text>
      </HStack>
      <VStack ml={3} w={"97%"} mt={3}>
        <Text fontFamily={"SUITE-Light"}>
          댓글이 들어가는 공간입니다댓글이 들어가는 공간입니다댓글이 들어가는
          공간입니다댓글이 들어가는 공간입니다댓글이 들어가는 공간입니다댓글이
          들어가는 공간입니다댓글이 들어가는 공간입니다댓글이 들어가는
          공간입니다댓글이 들어가는 공간입니다댓글이 들어가는 공간입니다댓글이
          들어가는 공간입니다
        </Text>
        <Text fontSize={10} fontFamily={"SUITE-Light"}>
          2023.05.24
        </Text>
      </VStack>
    </VStack>
  );
}
const styles = StyleSheet.create({
  sumnail: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
