import { Icon, Input } from "@rneui/themed";
import { useNavigation } from "expo-router";
import { Button, View } from "react-native";

export default function Index() {
  const navigation = useNavigation();

  const irLogin = () => {
    navigation.navigate("screens");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
      />
      <Button title="Ir al login" onPress={irLogin} />
    </View>
  );
}
