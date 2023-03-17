import React, { useContext } from "react";
import { View, Text, Image, ScrollView, Button, TouchableOpacity, TouchableHighlight } from "react-native";
import { CartContext } from "../../context/CartContext";
import { styles } from "./styles";


export default function ProductInfo({ route, navigation }) {
  const { item } = route.params;

  const context = useContext(CartContext);

  const defaultImg = require("../../../assets/baixados.png");
  const redplus = require("../../../assets/redPlus.png");
  const redminus = require("../../../assets/redMinus.png");

  // function add() {
  //   context?.addToCart(item)
  // }

  // function sub() {
  //   context?.subFromCart(item)
  // }

  return (
    <View style={styles.container}>
      <View style={styles.line}/>
      <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
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
          <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
          <TouchableOpacity>
            <Image source={redminus} style={styles.cartButton}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={redplus} style={styles.cartButton}/>
          </TouchableOpacity>
          </View>
          <View style={styles.divider}></View>
          <Text style={styles.description}>{item.description}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
            <Text style={styles.stock}>{item.stock > 0 ? item.stock + ' itens left.' : 'Esgotado'}</Text>
          </View>
          <Text style={styles.category}>Categoria: {item.category}</Text>
        </ScrollView>
      </View>
      <View style={{flexDirection: "row", justifyContent: "center", elevation: 17}}>
      <View style={styles.cutDiamondTopLineLeft}/>
      <View style={[styles.cutDiamondTop]}/>
      <View style={styles.cutDiamondTopLineRight}/>
      </View>
      <View/>
      </View>
      <View style={styles.line}/>
    </View>
  );
}
