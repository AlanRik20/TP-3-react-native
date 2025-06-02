import { Icon, Input } from "@rneui/themed";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

import "./global.css";
export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    router.replace({
      pathname: "/screens/Dashboard",
      params: { username },
    });
  };

  return (
    <View className="flex-1 justify-center items-center px-4">
      <Text className="font-semibold text-3xl mb-6">Iniciar Sesión</Text>

      <Input
        placeholder="Usuario"
        leftIcon={<Icon name="user" type="font-awesome" size={24} color="black" />}
        value={username}
        onChangeText={setUsername}
      />

      <Input
        placeholder="Contraseña"
        secureTextEntry
        leftIcon={<Icon name="lock" type="font-awesome" size={24} color="black" />}
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
}
