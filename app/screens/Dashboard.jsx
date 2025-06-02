import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Dashboard() {
  const router = useRouter();
  const { username } = useLocalSearchParams();

  const handleLogout = () => {
    // Redirige al login
    router.replace("/");
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <Text className="text-2xl font-semibold mb-4">
        Bienvenido, {username}
      </Text>

      <Text className="text-base text-gray-700 mb-8">
        Este es tu panel de usuario. Aquí podrías mostrar estadísticas, accesos rápidos, configuraciones, etc.
      </Text>

      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
}
