import { Icon, Input } from "@rneui/themed";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("demo@example.com")
  const [password, setPassword] = useState("Demo@P45ssW0rd123")

  const [tempstore, setTempStore] = useState({})


  const irLogin = () => {
    navigation.navigate("screens");
  };

  const handleLogin = async () => {
    const res = await fetch("http://192.168.1.3:3000/api/auth/signin", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({ email, password })
    })
    const data = await res.json();
    setTempStore(data)

  }

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Login</Text>
      <Input
        placeholder="Usuario"
        leftIcon={
          <Icon
            name="user"
            type="font-awesome"
            size={24}
            color="black"
          />
        }
        value={email}
        onChangeText={setEmail}
      /> <Input
        placeholder="Contraseña"
        leftIcon={
          <Icon
            name="lock"
            type="font-awesome"
            size={24}
            color="black"
          />
        }
        // secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
      <Text>{JSON.stringify(tempstore, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,

  }
})
