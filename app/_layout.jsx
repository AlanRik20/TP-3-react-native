import { Stack } from "expo-router";
import { UserProvider } from "../context/userContext";
import "./global.css";

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}
