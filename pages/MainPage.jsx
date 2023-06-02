import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { VStack, HStack, Text, Box, ScrollView, Pressable } from "native-base";

import HeaderComponent from "../components/HeaderComponent";
import BsetUser from "../components/BsetUser";
import TitleComponent from "../components/TitleComponent";
import AnimalList from "../components/AnimalList";
import ImageBlurLoading from "react-native-image-blur-loading";
import { useEffect, useState } from "react";
import PagePressComponent from "../components/PagePressComponent";

// 그라디언트
import { LinearGradient } from "expo-linear-gradient";
export default function MainPage({ navigation, route, dataList, animalData }) {
  const [data, setData] = useState(dataList);
  const [userData, setUserData] = useState([...dataList].slice(0, 5));

  return (
    <ScrollView backgroundColor={"#fff"} w={"100%"}>
      <HeaderComponent navigation={navigation} route={route} />
      <PagePressComponent
        navigation={navigation}
        route={route}
        content={data}
      />

      {/* 우리애기자랑 */}
      <Box mt={"30px"} mb={"30px"}>
        <TitleComponent
          title={"우리"}
          subtitle={"애기 좀 보세요!"}
          more={"블로그목록더보기"}
          navigation={navigation}
          route={route}
          data={data}
        />

        <ScrollView mb={3} w={"100%"} horizontal={true}>
          <HStack w={"100%"}>
            {data.map((item, i) => {
              const goDetail = () => {
                console.log("디테일페이지 이동");
                navigation.navigate("DetailPage", { data: item });
              };
              return (
                <Pressable
                  onPress={goDetail}
                  key={item.id}
                  w={200}
                  h={180}
                  borderRadius={10}
                  overflow={"hidden"}
                  mx={1}
                >
                  <ImageBlurLoading
                    thumbnailSource={{ uri: item.image }}
                    source={{ uri: item.image }}
                    style={styles.image}
                  />
                </Pressable>
              );
            })}
          </HStack>
        </ScrollView>
      </Box>
      <Box px={3} w={"100%"}>
        {/* 인기스타 */}
        <Box mb={"30px"}>
          <TitleComponent
            title={"우리"}
            subtitle={"들의 인기스타"}
            navigation={navigation}
            route={route}
            content={data}
          />
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
        {/* 동물병원 */}
        <Box mt={"30px"}>
          <TitleComponent
            content={data}
            title={"우리"}
            subtitle={"동네 동물병원"}
            more={"동물병원더보기"}
            navigation={navigation}
            route={route}
          />
          {animalData.map((item, i) => {
            return (
              <AnimalList
                item={item}
                key={i}
                animalData={animalData}
                navigation={navigation}
                route={route}
              />
            );
          })}
        </Box>

        <Box mt={"30px"}>
          <TitleComponent
            content={data}
            navigation={navigation}
            route={route}
            title={"우리"}
            subtitle={"동네 꿀팁"}
            more={"꿀팁더보기"}
          />
        </Box>
        {/* 우리동네꿀팁 */}
        <VStack mb={"30px"}>
          <HStack mb={3} mx={2}>
            <Text
              color={"#7DC9FD"}
              borderBottomWidth={1.5}
              borderBottomColor={"#7DC9FD"}
              fontFamily={"SUITE-Light"}
              fontSize={12}
              mx={1}
            >
              #건강
            </Text>
            <Text fontFamily={"SUITE-Light"} fontSize={12} mx={1}>
              #음식
            </Text>
            <Text fontFamily={"SUITE-Light"} fontSize={12} mx={1}>
              #훈련
            </Text>
          </HStack>
          <HStack>
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={styles.container}
              colors={["#7DC9FD", "#53DBA1"]}
            >
              <Text
                fontSize={"15px"}
                fontFamily={"SUITE-Bold"}
                color={"#009FF6"}
              >
                &lt;반려견 훈련학&gt;
              </Text>
              <Text fontFamily={"SUITE-Light"} color={"#fff"}>
                문제행동의 요인과 교정방법
              </Text>
            </LinearGradient>
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={styles.container}
              colors={["#7DC9FD", "#53DBA1"]}
            >
              <Text
                fontSize={"15px"}
                fontFamily={"SUITE-Bold"}
                color={"#009FF6"}
              >
                &lt;반려견 훈련학&gt;
              </Text>
              <Text fontFamily={"SUITE-Light"} color={"#fff"}>
                문제행동의 요인과 교정방법
              </Text>
            </LinearGradient>
          </HStack>
        </VStack>
      </Box>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  container: {
    width: 180,
    height: 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
});
