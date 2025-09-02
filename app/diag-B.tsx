import { CountdownItem } from "@/src/components/Countdown/CountdownItem";
import { useCountdown } from "@/src/components/Countdown/useCountdown";
import { PhotoList } from "@/src/components/PhotoList";
import { usePhotos } from "@/src/data/usePhotos";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const REACT_NATIVE_BIRTHDAY = "2026-03-26T08:00:00.000Z";

const GuineaPigsTab = () => {
  const { photos } = usePhotos("guinea pig");

  return <PhotoList photos={photos ?? []} />;
};

const CountdownDisplay = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}) => {
  return (
    <SafeAreaView
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
    </SafeAreaView>
  );
};

export default function Screen() {
  const [days, hours, minutes, seconds] = useCountdown(REACT_NATIVE_BIRTHDAY);
  return (
    <>
      <GuineaPigsTab />
      <CountdownDisplay
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </>
  );
}
