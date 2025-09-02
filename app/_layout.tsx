import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerShown: false, title: "" }}
          />
          <Stack.Screen name="fps" options={{ title: "FPS" }} />
          <Stack.Screen name="js" options={{ title: "JS" }} />
          <Stack.Screen name="flame" options={{ title: "FlameChart" }} />
          <Stack.Screen name="diag-A" options={{ title: "Diagnostic A" }} />
          <Stack.Screen name="diag-B" options={{ title: "Diagnostic B" }} />
          <Stack.Screen name="diag-C" options={{ title: "Diagnostic C" }} />
          <Stack.Screen name="diag-D" options={{ title: "Diagnostic D" }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
