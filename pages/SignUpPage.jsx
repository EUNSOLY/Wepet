import React from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  Center,
  Box,
  FormControl,
  Input,
} from "native-base";

import InputItem from "../components/InputItem";
import SnsButton from "../components/SnsButton";

export default function SignUpPage({ navigation, route }) {
  const goLogoin = () => {
    navigation.navigate("SignInPage");
  };

  return (
    <Center
      flex={1}
      borderWidth={1}
      backgroundColor={"#fff"}
      justifyContent={"flex-start"}
    >
      <Box safeAreaTop />
      <Text
        fontFamily={"SUITE-Bold"}
        fontSize={30}
        mt={"50px"}
        color={"#53DBA1"}
      >
        Sign Up
      </Text>
      <VStack px={3}>
        <InputItem title={"닉네임"} icon={"user"} type={"text"} />
        <InputItem title={"이메일"} icon={"mail"} type={"text"} />
        <InputItem title={"비밀번호"} icon={"lock"} type={"password"} />
      </VStack>

      <Button backgroundColor={"#009FF6"} w={"30%"} onPress={goLogoin}>
        <Text fontFamily={"SUITE-Light"} color={"#fff"} fontSize={12}>
          회원가입
        </Text>
      </Button>

      <Center flex={1} w={"100%"}>
        <Text fontSize={14} fontFamily={"SUITE-Bold"} color={"#232323"}>
          간편 로그인
        </Text>
        <SnsButton />
      </Center>
    </Center>
  );
}
