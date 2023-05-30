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
import BsetUser from "../components/BsetUser";
import TitleComponent from "../components/TitleComponent";
import HeaderComponent from "../components/HeaderComponent";
import BlogComponent from "../components/BlogComponent";
export default function CommunityPage({ navigation, route }) {
  return (
    <ScrollView w={"100%"} backgroundColor={"#fff"}>
      <HeaderComponent navigation={navigation} route={route} />
      <Box my={"30px"}>
        <TitleComponent title={"우리"} subtitle={"들의 인기스타"} />
        <HStack w={"100%"} justifyContent={"center"}>
          <BsetUser navigation={navigation} route={route} />
          <BsetUser navigation={navigation} route={route} />
          <BsetUser navigation={navigation} route={route} />
          <BsetUser navigation={navigation} route={route} />
          <BsetUser navigation={navigation} route={route} />
        </HStack>
      </Box>
      <Box>
        <TitleComponent
          title={"우리"}
          subtitle={"애기 좀 보세요!"}
          more={"블로그목록더보기"}
          navigation={navigation}
          route={route}
        />
      </Box>
      <BlogComponent />
    </ScrollView>
  );
}
