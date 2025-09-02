import camelcaseKeys from "camelcase-keys";
import { Photo, PhotoAPIResponse } from "./model/photo.quicktype";

// CHANGE THIS TO YOUR OWN CLIENT ACCESS KEY
const CLIENT_ACCESS_KEY = "REPLACE_ME";
const USE_MOCKED_DATA = true;

export const getAPISearchResults = async (search: string): Promise<object> => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      search
    )}&per_page=30&client_id=${CLIENT_ACCESS_KEY}`
  );
  const json = await response.json();

  return json;
};

// We mock the API to ensure we don't get rate limited
const mockHttpCall = async (search: string): Promise<object> => {
  // Add a delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 250));

  switch (search) {
    case "panda":
      return require("./raw/panda.json");
    case "rabbit":
      return require("./raw/rabbit.json");
    case "dog":
      return require("./raw/dog.json");
    case "guinea pig":
      return require("./raw/guineapig.json");
    default:
      return {
        results: [
          ...require("./raw/panda.json").results,
          ...require("./raw/guineapig.json").results,
          ...require("./raw/rabbit.json").results,
          ...require("./raw/dog.json").results,
        ],
      };
  }
};

const formatDate = (date: Date): Date => {
  return new Date(
    Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date))
  );
};

const formatNumber = (n: number): string => {
  return Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
  }).format(n);
};

const formatPhotoResponse = (json: unknown): Photo[] => {
  // @ts-expect-error
  const photos = camelcaseKeys(json, {
    deep: true,
  }) as unknown as PhotoAPIResponse;

  return photos.results.map((result) => ({
    ...result,
    createdAt: formatDate(result.createdAt),
    promotedAt: result.promotedAt ? formatDate(result.promotedAt) : null,
    updatedAt: formatDate(result.updatedAt),
    likes: formatNumber(result.likes),
    user: {
      ...result.user,
      updatedAt: formatDate(result.user.updatedAt),
    },
  }));
};

export const fetchPhotos = async (search: string): Promise<Photo[]> => {
  const json = USE_MOCKED_DATA
    ? await mockHttpCall(search)
    : await getAPISearchResults(search);

  return formatPhotoResponse(json);
};

export const fetchNotifications = async (): Promise<{
  notificationCount: number;
}> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    notificationCount: 12,
  };
};
