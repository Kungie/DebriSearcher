import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Vibration,
  Alert,
  Dimensions,
} from "react-native";

export default function App() {
  console.log("App Executed");
  console.log(Dimensions.get("screen"));

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#343e7a",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Image
        source={{
          uri: "https://www.google.com/maps/d/thumbnail?mid=1rcj1mUZmtMhyCMLEDuTwvlLDTHo",
          width: "100%",
          height: "82%",
        }}
        style={{
          zIndex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "#252525",
          width: "100%",
          height: "12%",
          display: "flex",
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "#151515",
        }}
      >
        <View
          style={{
            backgroundColor: "#202020",
            flex: 1,
          }}
        />
        <View
          style={{
            backgroundColor: "#252525",
            flex: 2,
          }}
        />
        <View
          style={{
            backgroundColor: "#202020",
            flex: 1,
          }}
        />
      </View>
    </View>
  );
}

//yellow  #fbe99e
//blue  #343e7a
