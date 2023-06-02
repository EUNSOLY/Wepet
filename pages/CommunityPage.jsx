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
import { useState, useEffect } from "react";

export default function CommunityPage({ navigation, route, dataList }) {
  const [data] = useState(dataList);
  const [userData, setUserData] = useState([...dataList].slice(0, 5));

  return (
    <ScrollView w={"100%"} backgroundColor={"#fff"}>
      <HeaderComponent navigation={navigation} route={route} />
      <Box my={"30px"}>
        <TitleComponent title={"우리"} subtitle={"들의 인기스타"} />
        <HStack w={"100%"} justifyContent={"center"}>
          {userData.map((item, i) => {
            return (
              <BsetUser
                navigation={navigation}
                route={route}
                item={item}
                key={i}
              />
            );
          })}
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
      {data.map((item, i) => {
        return (
          <BlogComponent
            content={item}
            key={i}
            i={i}
            navigation={navigation}
            route={route}
          />
        );
      })}
    </ScrollView>
  );
}
