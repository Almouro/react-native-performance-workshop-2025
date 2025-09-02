import { PhotoListItem } from "@/src/components/PhotoListItem/PhotoListItem";
import { Photo } from "@/src/data/model/photo.quicktype";
import { useLikedPhotos } from "@/src/data/usePhotos";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";

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
  const { photos } = useLikedPhotos();

  return <PhotoList photos={photos ?? []} />;
}
