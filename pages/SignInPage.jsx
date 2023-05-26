import React from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Image,
  Text,
  Center,
  Box,
} from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import InputItem from "../components/InputItem";
import SnsButton from "../components/SnsButton";
const logoImage = require("../assets/WePet.png");
export default function SignInPage({ navigation, route }) {
  const logIn = () => {
    navigation.navigate("TabNavigation");
  };
  const signUp = () => {
    navigation.navigate("SignUpPage");
  };
  return (
    <Center flex={1} backgroundColor={"#fff"} justifyContent={"flex-start"}>
      <Box safeAreaTop />
      <Image mt={100} source={logoImage} alt={"logo"} resizeMode={"contain"} />
      <Text
        fontFamily={"SUITE-Light"}
        fontSize={12}
        mt={2}
        mb={"50px"}
        color={"#7DC9FD"}
      >
        우리동네 모임에 오신걸 환영합니다:{"\u0029"}
      </Text>
      <VStack px={3}>
        <InputItem title={"이메일"} icon={"mail"} type={"text"} />
        <InputItem title={"비밀번호"} icon={"lock"} type={"password"} />
      </VStack>
      <HStack w={"100%"} justifyContent={"center"} alignItems={"center"} mb={3}>
        <TouchableOpacity style={styles.textContainer}>
          <Text style={styles.textItem}>아이이찾기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.textContainer}>
          <Text style={styles.textItem}>비밀번호찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.textContainer} onPress={signUp}>
          <Text style={styles.textItem}>회원가입</Text>
        </TouchableOpacity>
      </HStack>
      <Button backgroundColor={"#009FF6"} w={"30%"} py={2} onPress={logIn}>
        <Text fontFamily={"SUITE-Light"} color={"#fff"} fontSize={12}>
          로그인
        </Text>
      </Button>

      <Center w={"100%"} mt={4}>
        <Text fontSize={10} fontFamily={"SUITE-Light"} color={"#232323"}>
          간편 로그인
        </Text>
        <SnsButton />
      </Center>
    </Center>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 10,
  },

  textItem: {
    fontFamily: "SUITE-Light",
    fontSize: 10,
  },
});
