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
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../config/fireBase";
import { signInWithEmailAndPassword } from "firebase/auth";

const logoImage = require("../assets/WePet.png");
export default function SignInPage({ navigation, route }) {
  const [ready, setReady] = useState();

  useEffect(() => {
    // 로딩화면 보여줄 때 session 값 확인해서 메인페이지로 이동
    setTimeout(() => {
      AsyncStorage.getItem("session", (err, result) => {
        console.log("로그인페이지 session ------", result);

        if (result) {
          navigation.navigate("TabNavigation");
        } else {
          setReady(false);
        }
      });
      setReady(false);
    }, 1000);
  }, []);

  const logIn = () => {
    if (email === "") {
      setEmailError("이메일을 입력해주세요");
      return false;
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요");
      return false;
    } else {
      setPasswordError("");
    }

    //파이어베이스 로그인 처리
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("로그인성공", user.email);
        AsyncStorage.setItem("session", email);
        navigation.push("TabNavigation");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("로그인실패", errorCode, errorMessage);
      });
  };
  const signUp = () => {
    //로그인 버튼을 클릭했을 때 실행되는 함수

    navigation.navigate("SignUpPage");
  };
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // 이메일 상태관리
  const setEmailFunc = (itemInputEmail) => {
    setEmail(itemInputEmail);
  };
  // 비밀번호 상태관리
  const setPasswordFunc = (itemInputPassword) => {
    setPassword(itemInputPassword);
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
        <InputItem
          title={"이메일"}
          icon={"mail"}
          type={"text"}
          error={emailError}
          setFunc={setEmailFunc}
        />
        <InputItem
          title={"비밀번호"}
          icon={"lock"}
          type={"password"}
          error={passwordError}
          setFunc={setPasswordFunc}
        />
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
