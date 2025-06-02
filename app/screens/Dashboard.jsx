import { useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";


export default function login() {
  const user=useLocalSearchParams();
  return (
    <View>
        <Text>
            Dasboard de {user.username}
            <Button title="Logout" />
        </Text>
    </View>
  )
}
