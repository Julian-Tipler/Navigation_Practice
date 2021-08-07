import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import Center from "./Center";

const Stack = createStackNavigator();

function Login({ navigation }) {
  return (
    <Center>
      <Text>I am a login Screen</Text>
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </Center>
  );
}

function Register({ navigation }) {
  return (
    <Center>
      <Text>I am a register Screen</Text>
      <Button title="go to login"
      onPress={() => {
          navigation.navigate("Login")
      }}/>
    </Center>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
