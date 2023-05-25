import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import MyPage from "../pages/MyPage";
import WritingPage from "../pages/WritingPage";
import LikePage from "../pages/LikePage";

import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        // <Ionicons name="home-outline" size={24} color="black" />
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "MainPage") {
            iconName += "home-outline";
          } else if (route.name === "SearchPage") {
            iconName += "search";
          } else if (route.name === "WritingPage") {
            iconName += "add";
          } else if (route.name === "LikePage") {
            iconName += "heart-circle-outline";
          } else if (route.name === "MyPage") {
            iconName += "person-circle-outline";
          }
          console.log("icon", route);
          return (
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
    >
      <Tab.Screen name="MainPage" component={MainPage} />
      <Tab.Screen name="SearchPage" component={SearchPage} />
      <Tab.Screen name="WritingPage" component={WritingPage} />
      <Tab.Screen name="LikePage" component={LikePage} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
