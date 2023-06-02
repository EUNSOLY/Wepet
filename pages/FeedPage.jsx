import { StyleSheet, Dimensions } from "react-native";
import React from "react";
import {
  VStack,
  HStack,
  Text,
  Center,
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
export default function FeedPage({ navigation, route, user }) {
  const myUser = route.params.user;
  const [postClick, setPostClick] = useState(true);
  const [userClick, setUserClick] = useState(false);
  const [likeClick, setLikeClick] = useState(false);

  return (
    <ScrollView backgroundColor={"#fff"}>
      <HeaderComponent navigation={navigation} route={route} />

      <Center px={4}>
        <HStack alignItems={"flex-start"} mt={5} w={"100%"}>
          <VStack mr={5}>
            <ImageBlurLoading
              source={{ uri: myUser.image }}
              style={styles.thumbnail}
            />
          </VStack>
          <VStack mr={2} w={"83%"}>
            <Text fontFamily={"SUITE-Bold"} fontSize={15}>
              user네임
            </Text>
            <Text fontSize={13} fontFamily={"SUITE-Light"}>
              user소개
            </Text>
            <Flex flexDirection={"row"} my={3}>
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
      <HStack w={"100%"} justifyContent={"center"}>
        <Pressable mx={1} backgroundColor={"#7FD1AE"} px={10} py={1}>
          <Text color={"#fff"} fontFamily={"SUITE-Bold"}>
            팔로잉
          </Text>
        </Pressable>
        <Pressable mx={1} backgroundColor={"#7FD1AE"} px={10} py={1}>
          <Text color={"#fff"} fontFamily={"SUITE-Bold"}>
            메세지
          </Text>
        </Pressable>
      </HStack>
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
