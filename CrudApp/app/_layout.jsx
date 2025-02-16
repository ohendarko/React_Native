import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider, ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <HeaderWithTheme />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

function HeaderWithTheme() {
  const { theme } = useContext(ThemeContext);

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.text,
      }}
    >
      <Stack.Screen name="index" options={{ title: "My Todo List" }} />
      <Stack.Screen name="todos/[id]" options={{ title: "Edit Todo" }} />
    </Stack>
  );
}
