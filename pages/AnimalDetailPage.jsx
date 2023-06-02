import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
  VStack,
  HStack,
  Text,
  Center,
  Box,
  Pressable,
  ScrollView,
  FormControl,
  Input,
} from "native-base";
import CommemtComponent from "../components/CommemtComponent";
import HeaderComponent from "../components/HeaderComponent";
import ImageBlurLoading from "react-native-image-blur-loading";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
export default function AnimalDetailPage({ navigation, route }) {
  const userImage = require("../assets/post.png");
  const List = route.params.content;
  return (
    <ScrollView backgroundColor={"#fff"}>
      <HeaderComponent navigation={navigation} route={route} />
      <Center w={"100%"} h={200} borderWidth={1}>
        여기 지도
      </Center>
      <Box px={3}>
        <HStack>
          <Text fontSize={18} fontFamily={"SUITE-Bold"} py={2}>
            {List.name}
          </Text>
        </HStack>
      </Box>
      <HStack
        w={"100%"}
        backgroundColor={"#EBEBEB"}
        h={"70px"}
        mt={5}
        alignItems="center"
      >
        <FormControl>
          <FormControl.Label
            alignItems={"center"}
            w={"100%"}
            borderRadius={50}
            px={3}
            py={1}
            overflow={"hidden"}
            justifyContent={"space-around"}
          >
            <ImageBlurLoading
              thumbnailSource={userImage}
              source={userImage}
              style={styles.sumnail}
            />

            <Input
              w={"80%"}
              borderWidth={0}
              placeholder={`댓글을 입력해주세요.`}
              type={"text"}
              fontSize={12}
              backgroundColor={"#fff"}
              fontFamily={"SUITE-Bold"}
              borderRadius={50}
            />
          </FormControl.Label>
        </FormControl>
      </HStack>
      <VStack px={5} mt={5}>
        <CommemtComponent />
      </VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    marginVertical: 10,
    width: "95%",
    height: 240,
    objectFit: "cover",
    borderRadius: 10,
  },
  sumnail: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
