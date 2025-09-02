import { BounceImage } from "@/components/BounceImage";
import { Button } from "@/components/Button";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const sleep = (timeMs: number) => {
  const start = Date.now();
  while (Date.now() - start < timeMs) {}
};
const heavyCalculation = () => sleep(2000);

const Screen: React.FC<unknown> = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <BounceImage />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Button
            onPress={() => {
              setCounter((c) => c + 1);
            }}
            label="+"
          />
          <Text style={{ color: "white", fontSize: 32 }}>{counter}</Text>
        </View>

        <Button
          onPress={heavyCalculation}
          label="Trigger heavy JS calculation"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0b1115" },
  container: { flex: 1, alignItems: "center" },
});

export default Screen;
