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
import { Ionicons } from "@expo/vector-icons";

export default function BlogComponent({ navigation, route, i, content }) {
  console.log(content);
  const goDetail = () => {
    console.log("디테일페이지 이동");
    navigation.navigate("DetailPage", { data: content });
  };
  const goCommemt = (e) => {
    console.log("코멘트 페이지이동");
    e.preventDefault();
    navigation.navigate("CommentPage", { content: content });
  };
  return (
    <Pressable onPress={goDetail}>
      <HStack my={2.5} px={3} w={"100%"} justifyContent={"space-between"}>
        <VStack w={"70%"}>
          <Text fontFamily={"SUITE-Bold"} fontSize={17}>
            {content.title}
          </Text>
          <Text
            py={1}
            fontFamily={"SUITE-Light"}
            fontSize={13}
            numberOfLines={2}
          >
            내용이 들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이
            들어갑니다.내용이 들어갑니다.내용이 들어갑니다.내용이내용이
            들어갑니다.내용이asdfasdfsdf
          </Text>
          <HStack>
            <ImageBlurLoading
              thumbnailSource={{ uri: content.image }}
              source={{ uri: content.image }}
              style={styles.sumnail}
            />
            <VStack>
              <Text fontSize={13} fontFamily={"SUITE-Light"}>
                유저이름
              </Text>
              <Text fontSize={11} color={"#c8c8c8"} fontFamily={"SUITE-Light"}>
                시간
              </Text>
            </VStack>
            <HStack h={5} position={"relative"} bottom={-20} right={-70}>
              <Pressable
                onPress={() => {
                  console.log("좋아요");
                }}
              >
                <HStack px={1}>
                  <Ionicons
                    name="md-heart-outline"
                    fontFamily={"SUITE-Light"}
                    size={15}
                    color="red"
                    style={{ marginHorizontal: 1 }}
                  />
                  <Text px={0.4} fontSize={13} fontFamily={"SUITE-Bold"}>
                    0
                  </Text>
                </HStack>
              </Pressable>
              <Pressable onPress={goCommemt}>
                <HStack px={1} alignItems={"center"}>
                  <Ionicons
                    fontFamily={"SUITE-Light"}
                    name="md-chatbubble-ellipses-outline"
                    size={15}
                    color="#232323"
                    style={{ marginHorizontal: 1 }}
                  />

                  <Text px={0.4} fontSize={13} fontFamily={"SUITE-Bold"}>
                    0
                  </Text>
                </HStack>
              </Pressable>
            </HStack>
          </HStack>
        </VStack>
        <ImageBlurLoading
          thumbnailSource={{ uri: content.image }}
          source={{ uri: content.image }}
          style={styles.image}
        />
      </HStack>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 110,
    objectFit: "cover",
  },
  sumnail: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
