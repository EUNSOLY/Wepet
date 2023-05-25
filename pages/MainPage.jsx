import React from "react";
import { StyleSheet, Dimensions } from "react-native";
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
} from "native-base";
const width = Dimensions.get("window").width / 3;
const height = Dimensions.get("window").width / 3;
import HeaderComponent from "../components/HeaderComponent";
import BsetUser from "../components/BsetUser";
import ImageBlurLoading from "react-native-image-blur-loading";
import { useEffect, useState } from "react";
const image1 = require("../assets/post.png");
const image2 = require("../assets/post2.png");
const image3 = require("../assets/post3.png");

export default function MainPage({ navigation, route }) {
  return (
    <ScrollView backgroundColor={"#fff"} w={"100%"}>
      <HeaderComponent navigation={navigation} route={route} />
      <Box
        backgroundColor={"#ddd"}
        w={"100%"}
        h={150}
        justifyContent={"center"}
        alignItems={"center"}
        mb={3}
      >
        <Text>앱소개가 들어갑니다.</Text>
      </Box>
      <Box>
        <Text pb={2} color={"#232323"} fontFamily={"SUITE-Bold"}>
          <Text color={"#53DBA1"}>우리</Text>
          애기 좀 보세요!
        </Text>
        <ScrollView mb={3} borderWidth={1} w={"100%"} horizontal={true}>
          <HStack w={"100%"} borderWidth={1} borderColor={"red.500"}>
            <Box>
              <ImageBlurLoading
                thumbnailSource={image1}
                source={image1}
                style={styles.image}
              />
            </Box>
            <Box>
              <ImageBlurLoading
                thumbnailSource={image2}
                source={image2}
                style={styles.image}
              />
            </Box>
            <Box>
              <ImageBlurLoading
                thumbnailSource={image3}
                source={image3}
                style={styles.image}
              />
            </Box>
          </HStack>
        </ScrollView>
      </Box>
      <Box px={3} w={"100%"}>
        <Box mb={3}>
          <Text pb={2} color={"#232323"} fontFamily={"SUITE-Bold"}>
            <Text color={"#53DBA1"}>우리</Text>
            들의 인기스타
          </Text>
          <HStack w={"100%"} justifyContent={"center"}>
            <BsetUser navigation={navigation} route={route} />
            <BsetUser navigation={navigation} route={route} />
            <BsetUser navigation={navigation} route={route} />
            <BsetUser navigation={navigation} route={route} />
            <BsetUser navigation={navigation} route={route} />
          </HStack>
        </Box>
      </Box>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: width,
    objectFit: "cover",
  },
});
