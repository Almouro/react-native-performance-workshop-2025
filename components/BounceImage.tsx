import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export const BounceImage: React.FC<unknown> = () => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    // Move from 0 to -amplitude, then auto-reverse forever
    translateY.value = withRepeat(
      withTiming(500, {
        duration: 1000,
        easing: Easing.inOut(Easing.quad),
      }),
      -1, // infinite
      true // reverse
    );
  }, [translateY]);

  const imageAnimStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageWrap, imageAnimStyle]}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1512483652399-7a1f99aa0dd3?ixid=M3wzNDQ2MzV8MHwxfHNlYXJjaHw1fHxndWluZWElMjBwaWdzfGVufDB8fHx8MTcwODMzMzI4Nnww&ixlib=rb-4.0.3?w=900",
          }}
          style={styles.image}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  imageWrap: {
    flex: 1,
    paddingHorizontal: 24,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 9999,
  },
});
