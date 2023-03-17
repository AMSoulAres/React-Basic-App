import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {View, Image, TouchableOpacity, Text} from 'react-native'
import Main from "../screens/Main";
import ProductInfo from "../screens/ProductInfo";
import cartImg from "../../assets/Cart.png"
import { CartContext } from "../context/CartContext";

export const Stack = createNativeStackNavigator();

export function Navigation() {
  const context = useContext(CartContext);

  const [cart, useCart] = useState({
    num: 0,
    itens: [],
    values: 0
  })
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
            headerRight: () => (<TouchableOpacity onPress={() => {alert(context)}}>
              {/* <Text style={{}}>{context.cart.num ? context.cart.num : '!'}</Text> */}
              <Image source={cartImg} style={{width: 45, height:40, resizeMode: "contain"}}/></TouchableOpacity>),
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
            headerRight: () => (<TouchableOpacity>
              {/* <Text style={{}}>{context?.cart.num ? context?.cart.num : '!'}</Text> */}
              <Image source={cartImg} style={{width: 45, height:40, resizeMode: "contain"}}/></TouchableOpacity>),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
