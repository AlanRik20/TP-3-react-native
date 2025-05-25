import { Tabs } from "expo-router";

export default function ScreenLayout() {
  return (
    <Tabs screenOptions={{ headerStyle: { backgroundColor: 'red' }, headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'asd' }} />
      <Tabs.Screen name="register" options={{ title: 'hello world' }} />
    </Tabs>
  );
}
