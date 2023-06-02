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
  Input,
  TextArea,
} from "native-base";
import ImageBlurLoading from "react-native-image-blur-loading";
import HeaderComponent from "../components/HeaderComponent";
export default function WritingPage({ navigation, route }) {
  return (
    <ScrollView backgroundColor={"#fff"}>
      <HeaderComponent navigation={navigation} route={route} />
      <Center p={4}>
        <Box w={"100%"}>
          <Text fontSize={14} fontFamily={"SUITE-Bold"} color={"#7DC9FD"}>
            나만 보기 아까운 울애기 자랑하기~
          </Text>
        </Box>
        <Pressable
          borderWidth={1}
          borderColor={"#c8c8c8c8"}
          w={"100%"}
          h={150}
          borderRadius={10}
          mt={4}
          mb={4}
          justifyContent={"center"}
        >
          <Text color={"#c8c8c8c8"} fontSize={35} textAlign={"center"}>
            +
          </Text>
        </Pressable>
        <Input
          placeholder="제목을 입력해세요"
          fontSize={14}
          borderRadius={10}
          mb={4}
        />

        <TextArea borderRadius={10} h={150} placeholder="내용을 입력해세요" />
        <Pressable w={120} py={2} my={8} backgroundColor={"#7DC9FD"}>
          <Text
            fontFamily={"SUITE-Bold"}
            fontSize={14}
            color={"#fff"}
            textAlign={"center"}
          >
            등록
          </Text>
        </Pressable>
      </Center>
    </ScrollView>
  );
}
