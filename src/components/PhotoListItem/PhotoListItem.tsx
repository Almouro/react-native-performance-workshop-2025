import React from "react";
import { Dimensions, Image, PixelRatio, StyleSheet, View } from "react-native";
import { Photo } from "../../data/model/photo.quicktype";
import { ButtonsFooter } from "./ButtonsFooter";
import { ProfileHeader } from "./ProfileHeader";

const windowWidth = Dimensions.get("window").width;

export const PhotoListItem = ({ photo }: { photo: Photo }) => {
  const aspectRatio = photo.width / photo.height;

  return (
    <View style={styles.container}>
      <ProfileHeader user={photo.user} />
      <View style={{ width: "100%", height: undefined, aspectRatio }}>
        <Image
          style={styles.image}
          source={{
            uri: `${photo.urls.raw}?w=${PixelRatio.getPixelSizeForLayoutSize(
              windowWidth
            )}`,
          }}
          resizeMode="cover"
        />
      </View>
      <ButtonsFooter photo={photo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
