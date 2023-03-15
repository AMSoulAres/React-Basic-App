import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Main from "../screens/Main";
import ProductInfo from "../screens/ProductInfo";

export const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CyberMarket">
        <Stack.Screen
          name="CyberMarket"
          component={Main}
          options={{
            headerStyle: { backgroundColor: "#f2e900" },
            headerTitleStyle: { fontFamily: "Cyberpunk", color: '#001833', fontSize: 40 },
            headerLargeTitleShadowVisible: true,
            headerShadowVisible: true,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Product Info"
          component={ProductInfo}
          options={{
            headerStyle: { backgroundColor: "#f2e900" },
            headerTitleStyle: { fontFamily: "RedRock", color: '#001833', fontSize: 40 },
            headerLargeTitleShadowVisible: true,
            headerShadowVisible: true,
            headerTitleAlign: 'center',
            headerBackVisible: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
