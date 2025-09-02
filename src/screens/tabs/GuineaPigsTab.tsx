import React from "react";
import { ActivityIndicator, View } from "react-native";
import { PhotoList } from "../../components/PhotoList";
import { putLikedPhotosFirst, usePhotos } from "../../data/usePhotos";

const REACT_NATIVE_BIRTHDAY = "2026-03-26T08:00:00.000Z";

export const GuineaPigsTab = () => {
  const { photos, isLoading } = usePhotos("guinea pig");

  const sortedPhotos = putLikedPhotosFirst(photos ?? []);
  // const [days, hours, minutes, seconds] = useCountdown(REACT_NATIVE_BIRTHDAY);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        {isLoading ? <ActivityIndicator style={{ marginTop: 10 }} /> : null}
        {sortedPhotos ? <PhotoList photos={sortedPhotos} /> : null}
      </View>
      {/* <SafeAreaView
        edges={["bottom"]}
        style={{ flexDirection: "row", backgroundColor: "rgb(40, 44, 52)" }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <CountdownItem value={days} text="Days" />
            <CountdownItem value={hours} text="Hours" />
            <CountdownItem value={minutes} text="Min" />
            <CountdownItem value={seconds} text="Sec" />
          </View>

          <Text
            style={{
              color: "rgb(97, 218, 251)",
              fontWeight: "600",
              marginTop: 10,
            }}
          >
            {" "}
            until React Native Birthday 🎂
          </Text>
        </View>
      </SafeAreaView> */}
    </View>
  );
};
