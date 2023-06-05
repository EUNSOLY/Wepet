import ImageBlurLoading from "react-native-image-blur-loading";
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
import HeaderComponent from "../components/HeaderComponent";
import ImageComponent from "../components/ImageComponent";
import FollowComponent from "../components/FollowComponent";

import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
const my = require("../assets/user1.png");
const imgWidth = Dimensions.get("window").width / 3;
import { auth, db } from "../config/fireBase";
import { signOut } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function MyPage({ navigation, route }) {
  const [postClick, setPostClick] = useState(true);
  const [userClick, setUserClick] = useState(false);
  const [likeClick, setLikeClick] = useState(false);
  const [data, setData] = useState([]); //데이터 저장변수
  const [nickName, setNicName] = useState(); // 닉네임 저장변수
  const [email, setEmail] = useState(); // 이메일 저장변수
  const [comment, setComment] = useState(); // 댓글저장변수
  const [uid, setUid] = useState(); // uid 저장변수

  useEffect(() => {
    const fetchData = async () => {
      const email = await getSession();
      setEmail(email);
      const userData = await getUser(email);
      setNicName(userData[0].nickName);
      setUid(userData[0].uid);
      getData(userData[0].uid);

      const dataList = onSnapshot(
        query(collection(db, "diary"), where("uid", "==", userData[0].uid)),
        (snapshot) => {
          const updateData = snapshot.docs.map((doc) => doc.data());
          setData(updateData);
        }
      );

      return () => {
        dataList();
        commentList();
      };
    };

    fetchData();
  }, []);

  // user diary data가져오기
  const getData = async (uid) => {
    const q = query(collection(db, "diary"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    const diaryData = querySnapshot.docs.map((doc) => doc.data());
    setData(diaryData);
  };

  // user의 이메일정보를 활용해서 유저정보가져오기
  const getUser = async (email) => {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
  };
  // 이메일 정보 가져오기 (세션정보)
  const getSession = async () => {
    try {
      const value = await AsyncStorage.getItem("session");
      if (value) {
        // console.log("-----------------getSession value값", value);
        return value;
      }
    } catch (err) {
      console.log(err);
    }
  };
  const logoutFunc = () => {
    signOut(auth)
      .then(() => {
        console.log("로그아웃");
        // AsyncStorage에서 session 삭제
        AsyncStorage.removeItem("session", (err, result) => {
          console.log("마이페이지 seession--------", result);
        });
        // 로그인 페이지로 이동
        navigation.push("SignInPage");
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
              <Pressable
                onPress={logoutFunc}
                w={"300px"}
                position={"absolute"}
                bottom={"70px"}
                left={"310px"}
              >
                <Text
                  fontSize={14}
                  color={"red.500"}
                  fontFamily={"SUITE-Light"}
                >
                  로그아웃
                </Text>
              </Pressable>
            </Pressable>
          </VStack>
          <VStack mr={2} w={"83%"}>
            <Text fontFamily={"SUITE-Bold"} fontSize={15}>
              {/* {data[0].author}님 */}
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
          {data.map((item, i) => {
            return (
              <ImageBlurLoading
                key={i}
                source={{ uri: item.image }}
                thumbnailSource={{ uri: item.image }}
                style={{ width: imgWidth, height: imgWidth }}
              />
            );
          })}
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
