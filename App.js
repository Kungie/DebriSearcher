import React from "react";
import { Text, View, Image, Dimensions } from "react-native";

export default function App() {
  console.log("App Executed");
  console.log(Dimensions.get("screen"));

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#202020",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          zIndex: 3,
          position: "absolute",
          backgroundColor: "#252525",
          opacity: 0.8,
          borderRadius: "10%",
          width: "45%",
          height: "5%",
          left: "50%",
          bottom: "85%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
          }}
        >
          Mediterranean Sea
        </Text>
      </View>

      <View
        style={{
          zIndex: 3,
          position: "absolute",
          backgroundColor: "#202020",
          opacity: 0.8,
          borderRadius: "10%",
          width: "40%",
          height: "8%",
          left: "60%",
          bottom: "45%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            zIndex: 4,
            fontSize: 11,
            color: "white",
          }}
        >
          Depth: 2700m {"\n"}Density: Medium {"\n"}Diameter: 100m {"\n"}Average
          Size of Plastics: 5cm
        </Text>
      </View>

      <Image
        source={require("./assets/google-map-pin-icon-png-0.jpeg")}
        style={{
          height: "5%",
          width: "8%",
          position: "absolute",
          zIndex: 2,
          bottom: "45%",
          left: "5%",
        }}
      ></Image>
      <Image
        source={require("./assets/google-map-pin-icon-png-0.jpeg")}
        style={{
          height: "5%",
          width: "8%",
          position: "absolute",
          zIndex: 2,
          bottom: "32%",
          left: "80%",
        }}
      ></Image>
      <Image
        source={require("./assets/google-map-pin-icon-png-0.jpeg")}
        style={{
          height: "9.5%",
          width: "15%",
          position: "absolute",
          zIndex: 2,
          bottom: "37%",
          left: "55%",
        }}
      ></Image>
      <Image
        source={require("./assets/google-map-pin-icon-png-0.jpeg")}
        style={{
          height: "5%",
          width: "8%",
          position: "absolute",
          zIndex: 2,
          bottom: "35%",
          left: "25%",
        }}
      ></Image>

      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Mediterranean_Basin_and_Near_East_before_1000_AD_topographic_map.jpg",
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Image
            source={require("./assets/Information-icon.png")}
            style={{
              height: "50%",
              width: "50%",
            }}
          ></Image>
        </View>
        <View
          style={{
            backgroundColor: "#252525",
            flex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Image
            source={require("./assets/2820184-200.png")}
            style={{
              height: "80%",
              width: "40%",
            }}
          ></Image>
        </View>
        <View
          style={{
            backgroundColor: "#202020",
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Image
            source={require("./assets/126472.png")}
            style={{
              height: "50%",
              width: "50%",
            }}
          ></Image>
        </View>
      </View>
    </View>
  );
}

//yellow  #fbe99e
//blue  #343e7a
