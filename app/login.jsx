import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useUser } from "../context/userContext";

export default function Login() {
  const router = useRouter();
  const { setUsername } = useUser();

  const [username, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setUsername(username);
    router.replace("/(tabs)");
  };

  return (
    <View className="flex-1 justify-center items-center px-6 bg-primary">
      <Text className="font-bold text-4xl text-white mb-10">Iniciar Sesión</Text>

      <TextInput
        placeholder="Usuario"
        placeholderTextColor="#ddd"
        value={username}
        onChangeText={setUsernameInput}
        className="w-full mb-4 px-4 py-3 rounded-xl bg-white/20 text-white border border-white/30"
      />

      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#ddd"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        className="w-full mb-6 px-4 py-3 rounded-xl bg-white/20 text-white border border-white/30"
      />

      <TouchableOpacity
        onPress={handleLogin}
        className="w-full py-3 bg-white rounded-xl items-center shadow-md shadow-black"
      >
        <Text className="text-primary font-bold text-lg">Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}
// This code defines a simple login screen using React Native and Expo Router.