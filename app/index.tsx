import { Button } from "@/components/Button";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Button label="1. FPS" onPress={() => router.push("/fps")} />
      <Button label="2. JS" onPress={() => router.push("/js")} />
      <Button label="3. FlameChart" onPress={() => router.push("/flame")} />
      <Button label="4. Diagnostic A" onPress={() => router.push("/diag-A")} />
      <Button label="5. Diagnostic B" onPress={() => router.push("/diag-B")} />
      <Button label="6. Diagnostic C" onPress={() => router.push("/diag-C")} />
      <Button label="7. Diagnostic D" onPress={() => router.push("/diag-D")} />
    </SafeAreaView>
  );
}
