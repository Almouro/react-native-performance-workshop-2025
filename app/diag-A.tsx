import { PhotoList } from "@/src/components/PhotoList";
import { usePhotos } from "@/src/data/usePhotos";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const GuineaPigsTab = () => {
  const { photos } = usePhotos("guinea pig");

  return <PhotoList photos={photos ?? []} />;
};

const RabbitsTab = () => {
  const { photos } = usePhotos("rabbit");

  return <PhotoList photos={photos ?? []} />;
};

const DogsTab = () => {
  const { photos } = usePhotos("dog");

  return <PhotoList photos={photos ?? []} />;
};

const PandasTab = () => {
  const { photos } = usePhotos("panda");

  return <PhotoList photos={photos ?? []} />;
};

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="🐹" component={GuineaPigsTab} />
      <Tab.Screen name="🐰" component={RabbitsTab} />
      <Tab.Screen name="🐶" component={DogsTab} />
      <Tab.Screen name="🐼" component={PandasTab} />
    </Tab.Navigator>
  );
}

export default function Screen() {
  return <MyTabs />;
}
