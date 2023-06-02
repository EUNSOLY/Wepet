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
import ImageBlurLoading from "react-native-image-blur-loading";
import HeaderComponent from "../components/HeaderComponent";
import ImageComponent from "../components/ImageComponent";
import FollowComponent from "../components/FollowComponent";
import PagePressComponent from "../components/PagePressComponent";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
const my = require("../assets/user1.png");
const imgWidth = Dimensions.get("window").width / 3;
export default function MyPage({ navigation, route }) {
  const [postClick, setPostClick] = useState(true);
  const [userClick, setUserClick] = useState(false);
  const [likeClick, setLikeClick] = useState(false);
  return (
    <ScrollView backgroundColor={"#fff"}>
      <HeaderComponent navigation={navigation} route={route} />

      <Center px={4}>
        <HStack alignItems={"center"} mt={5} w={"100%"}>
          <VStack mr={5}>
            <ImageBlurLoading source={my} style={styles.thumbnail} />
            <Pressable>
              <Text
                my={1.5}
                fontSize={11}
                color={"#c8c8c8"}
                fontFamily={"SUITE-Light"}
              >
                프로필 편집
              </Text>
            </Pressable>
          </VStack>
          <VStack mr={2} w={"83%"}>
            <Text fontFamily={"SUITE-Bold"} fontSize={15}>
              user네임
            </Text>
            <Text fontSize={13} fontFamily={"SUITE-Light"}>
              user소개
            </Text>
            <Flex flexDirection={"row"}>
              <HStack w={"30%"} alignItems={"center"}>
                <Text mr={1.5} fontFamily={"SUITE-Bold"} fontSize={15}>
                  게시글
                </Text>
                <Text fontSize={13} fontFamily={"SUITE-Light"}>
                  0
                </Text>
              </HStack>
              <HStack w={"30%"} alignItems={"center"}>
                <Text mr={1.5} fontFamily={"SUITE-Bold"} fontSize={15}>
                  팔로워
                </Text>
                <Text fontSize={13} fontFamily={"SUITE-Light"}>
                  0
                </Text>
              </HStack>
              <HStack w={"30%"} alignItems={"center"}>
                <Text mr={1.5} fontFamily={"SUITE-Bold"} fontSize={15}>
                  팔로잉
                </Text>
                <Text fontSize={13} fontFamily={"SUITE-Light"}>
                  0
                </Text>
              </HStack>
            </Flex>
          </VStack>
        </HStack>
      </Center>

      <HStack w={"100%"} mt={4} backgroundColor={"#F7F7FE"} py={4}>
        <Pressable
          w={imgWidth}
          justifyContent={"center"}
          alignItems={"center"}
          onPress={() => {
            setPostClick(true);
            setUserClick(false);
            setLikeClick(false);
          }}
        >
          <Ionicons
            name="md-apps-sharp"
            size={24}
            color={postClick ? "#7DC9FD" : "#7FD1AE"}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setPostClick(false);
            setUserClick(true);
            setLikeClick(false);
          }}
          w={imgWidth}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Ionicons
            name="md-paw-sharp"
            size={24}
            color={userClick ? "#7DC9FD" : "#7FD1AE"}
          />
        </Pressable>
        <Pressable
          w={imgWidth}
          justifyContent={"center"}
          alignItems={"center"}
          onPress={() => {
            setPostClick(false);
            setUserClick(false);
            setLikeClick(true);
          }}
        >
          <Ionicons
            name="md-heart"
            size={24}
            color={likeClick ? "#7DC9FD" : "#7FD1AE"}
          />
        </Pressable>
      </HStack>
      {postClick ? (
        <Flex flexDirection={"row"} flexWrap={"wrap"} borderColor={"red"}>
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
        </Flex>
      ) : null}
      {userClick ? (
        <Flex>
          <FollowComponent />
          <FollowComponent />
          <FollowComponent />
          <FollowComponent />
          <FollowComponent />
        </Flex>
      ) : null}
      {likeClick ? (
        <Flex flexDirection={"row"} flexWrap={"wrap"} borderColor={"red"}>
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
          <ImageComponent />
        </Flex>
      ) : null}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  logout: {
    backgroundColor: "#999",
    borderRadius: 10,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
