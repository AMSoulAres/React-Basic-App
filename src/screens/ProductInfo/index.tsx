import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import defaultImg from "../../../assets/baixados.png";
export default function ProductInfo({ route, navigation }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={defaultImg} style={styles.image}></Image>
        <ScrollView style={styles.cardContent}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              height: 90,
            }}
          >
            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.price}>
              ${" "}
              {item.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </Text>
          </View>
          <View style={styles.divider}></View>
          <Text style={styles.description}>{item.description}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
            <Text style={styles.stock}>{item.stock > 0 ? item.stock + ' itens em estoque.' : 'Esgotado'}</Text>
          </View>
          <Text style={styles.category}>Categoria: {item.category}</Text>
        </ScrollView>
      </View>
    </View>
  );
}
