import { PhotoListItem } from "@/src/components/PhotoListItem/PhotoListItem";
import { Photo } from "@/src/data/model/photo.quicktype";
import { usePhotos } from "@/src/data/usePhotos";
import { FlashList } from "@shopify/flash-list";
import { useEffect } from "react";
import { View } from "react-native";
import { Analytics } from "react-native-analytics";

const useInitializeAnalytics = () =>
  useEffect(() => {
    Analytics.initialize();
  }, []);

const Separator = () => <View style={{ height: 16 }} />;

const PhotoList = ({ photos }: { photos: Photo[] }) => {
  return (
    <FlashList
      data={photos}
      renderItem={({ item }) => <PhotoListItem photo={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Separator}
      style={{ backgroundColor: "white" }}
      contentInsetAdjustmentBehavior="automatic"
    />
  );
};

export default function Screen() {
  useInitializeAnalytics();
  const { photos } = usePhotos("pandas");

  return <PhotoList photos={photos ?? []} />;
}
