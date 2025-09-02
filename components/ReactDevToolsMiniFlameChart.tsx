import React, { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const sleep = (timeMs: number) => {
  const start = Date.now();
  while (Date.now() - start < timeMs) {}
};

const D = () => {
  sleep(25);
  return (
    <>
      <Text>D</Text>
      <E />
    </>
  );
};

const E = () => {
  sleep(30);
  return <Text>E</Text>;
};

const B = () => {
  sleep(20);
  return (
    <>
      <D />
      <Text>B</Text>
      <D />
      <D />
    </>
  );
};

const C = () => {
  sleep(15);
  return (
    <>
      <E />
      <Text>C</Text>
    </>
  );
};

const A = () => {
  sleep(5);

  return (
    <>
      <Text>A</Text>
      <B />
      <C />
    </>
  );
};

export const ReactDevToolsMiniFlameChart = () => {
  const [showA, setShowA] = useState(false);

  return (
    <SafeAreaView style={{ padding: 10 }}>
      <Text onPress={() => setShowA(!showA)} style={{ marginBottom: 10 }}>
        Show A
      </Text>
      {showA && <A />}
    </SafeAreaView>
  );
};
