import { Icon } from "@rneui/themed";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";


export default function Profile() {
  const router = useRouter();
  const { username } = useLocalSearchParams();

  const handleLogout = () => {
    router.replace("/");
  };

  return (
    <View className="flex-1 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200 items-center justify-center px-6">
      
      {/* Tarjeta */}
      <View className="bg-white shadow-lg rounded-3xl p-6 w-full max-w-sm items-center">

        {/* Avatar colorido */}
        <View className="w-28 h-28 rounded-full bg-indigo-500 justify-center items-center mb-4 shadow-md">
          <Icon name="user" type="font-awesome" size={80} color="black" className="pt-8" />
          <Text className="text-white text-4xl font-bold">
            {username?.[0]?.toUpperCase()}
          </Text>
        </View>

        {/* Nombre de usuario */}
        <Text className="text-2xl font-bold text-indigo-700 mb-1 capitalize">
          {username}
        </Text>

        {/* Email ficticio */}
        <Text className="text-gray-500 mb-6">
          {username?.toLowerCase()}@ejemplo.com
        </Text>

        {/* Botón con colores vivos */}
        <TouchableOpacity
          onPress={handleLogout}
          className="bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 rounded-full shadow-sm"
        >
          <Text className="text-white font-semibold text-base">
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
