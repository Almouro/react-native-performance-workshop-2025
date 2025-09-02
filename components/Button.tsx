import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

interface ButtonProps {
  onPress: () => void;
  label: string;
  style?: ViewStyle;
  labelStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  label,
  style,
  labelStyle,
}) => (
  <Pressable
    style={({ pressed }) => [
      styles.button,
      pressed && styles.buttonPressed,
      style,
    ]}
    onPress={onPress}
  >
    <Text style={[styles.buttonLabel, labelStyle]}>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    margin: 16,
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
    backgroundColor: "#2aa198",
  },
  buttonPressed: { opacity: 0.8 },
  buttonLabel: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
});
