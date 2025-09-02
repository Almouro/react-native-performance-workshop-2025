import { BounceImage } from "@/components/BounceImage";
import { Button } from "@/components/Button";
import { runBackgroundUIProcess } from "@/runBackgroundCalculationOnUI";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const Screen: React.FC<unknown> = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <BounceImage />

        <Button
          onPress={() => {
            runBackgroundUIProcess();
          }}
          label="Trigger heavy UI calculation"
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
