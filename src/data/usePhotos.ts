import { useQuery } from "@tanstack/react-query";
import { fetchPhotos } from "./api";
import { getLikedPhotos } from "./localStorage";
import { Photo } from "./model/photo.quicktype";

export const putLikedPhotosFirst = (photos: Photo[]) => {
  const likedPhotoIds = getLikedPhotos();
  return photos.sort((a, b) => {
    if (likedPhotoIds.includes(a.id) && !likedPhotoIds.includes(b.id)) {
      return -1;
    }

    if (!likedPhotoIds.includes(a.id) && likedPhotoIds.includes(b.id)) {
      return 1;
    }

    return 0;
  });
};

export const usePhotos = (search: string) => {
  const {
    data: photos,
    error,
    isLoading,
  } = useQuery({
    queryKey: [search],
    queryFn: async () => {
      const photos = await fetchPhotos(search);
      return photos;
    },
  });

  if (error) {
    throw error;
  }

  return {
    photos,
    isLoading,
  };
};

export const useLikedPhotos = () => {
  const { photos } = usePhotos("default");
  const sortedPhotos = putLikedPhotosFirst(photos ?? []);

  return {
    photos: sortedPhotos,
  };
};
