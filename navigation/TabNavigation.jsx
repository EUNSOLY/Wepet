import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import MainPage from "../pages/MainPage";

import MyPage from "../pages/MyPage";
import WritingPage from "../pages/WritingPage";

import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CommunityPage from "../pages/CommunityPage";
import BlogComponent from "../components/BlogComponent";
import DetailPage from "../pages/DetailPage";
import FeedPage from "../pages/FeedPage";
import CommentPage from "../pages/CommentPage";
import AnimalhospicePage from "../pages/AnimalhospicePage";
import ShopingmallPage from "../pages/ShopingmallPage";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const MainStack = ({ data, animalData }) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="MainPage">
      {(props) => (
        <MainPage {...props} dataList={data} animalData={animalData} />
      )}
    </Stack.Screen>

    <Stack.Screen name="BlogComponent">
      {(props) => <BlogComponent {...props} dataList={data} />}
    </Stack.Screen>

    <Stack.Screen name="CommentPage">
      {(props) => <CommentPage {...props} dataList={data} />}
    </Stack.Screen>

    <Stack.Screen name="DetailPage">
      {(props) => <DetailPage {...props} dataList={data} />}
    </Stack.Screen>
  </Stack.Navigator>
);

function TabNavigation({ data, navigation, route, animalData }) {
  const getActiveTabOptions = ({ route }) => {
    let options = {};

    if (route.name === "ShopingmallPage" || route.name === "FeedPage") {
      options.tabBarButton = () => null; // 해당 탭을 렌더링하지 않음
    }

    return options;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        ...getActiveTabOptions({ route }),
        headerShown: false,
        tabBarShowLabel: false,
        // <Ionicons name="home-outline" size={24} color="black" />
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "MainStack") {
            iconName += "home-outline";
          } else if (route.name === "CommunityPage") {
            iconName += "heart-circle-outline";
          } else if (route.name === "WritingPage") {
            iconName += "add";
          } else if (route.name === "AnimalhospicePage") {
            iconName += "medkit-outline";
          } else {
            iconName += "person-circle-outline";
          }

          return route.name == "ShopingmallPage" ? null : (
            <Ionicons
              name={iconName}
              color={focused ? "#7DC9FD" : "#BDBDBD"}
              size={24}
            />
          );
        },

        tabBarStyle: [
          {
            height: 50,
            display: "flex",
          },
        ],
      })}
      initialRouteName="MainPage"
    >
      <Tab.Screen name="MainStack">
        {(props) => (
          <MainStack {...props} data={data} animalData={animalData} />
        )}
      </Tab.Screen>
      <Tab.Screen name="CommunityPage">
        {(props) => (
          <CommunityPage
            {...props}
            dataList={data}
            navigation={navigation}
            route={route}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="WritingPage" component={WritingPage} />
      <Tab.Screen name="AnimalhospicePage">
        {(props) => (
          <AnimalhospicePage
            {...props}
            dataList={data}
            animalData={animalData}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="FeedPage">
        {(props) => <FeedPage {...props} dataList={data} />}
      </Tab.Screen>
      <Tab.Screen name="MyPage" component={MyPage} />
      <Tab.Screen name="ShopingmallPage" component={ShopingmallPage} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
