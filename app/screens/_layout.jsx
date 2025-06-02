import { Tabs } from "expo-router";

export default function ScreenLayout() {
  return (
    <Tabs screenOptions={{ headerStyle: { backgroundColor: 'red' }, headerShown: false }}>
      <Tabs.Screen name="Dashboard" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="register" options={{ title: 'elemento1' }} />
      <Tabs.Screen name="Ajustes" options={{ title: 'Ajustes' }} />
      <Tabs.Screen name="Perfil" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}
