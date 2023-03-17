import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import ListItem from "../../components/ListItem";
import { CartContext } from "../../context/CartContext";
import Request from "../../data/Request";
import { styles } from "./styles";

export default function Main({ navigation }) {
  const [db, setDb] = useState<any[]>();
  const [loading, setLoading] = useState(false);
  const context = useContext(CartContext);
  
  

  async function loadDb() {
    setLoading(true);
    const res = await Request.getAllProducts();
    setDb(res);
    setLoading(false);
  }

  useEffect(() => {
    loadDb();

  }, []);


  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator animating={loading} style={{ paddingTop: "75%" }} color="#DEB841" size={100} />
        ) : (
          <FlatList
          data={db}
          renderItem={({ item }) => {
            return (
              <ListItem
              title={item.title}
              desc={item.description}
              imgUri={item.thumbnail}
              rating={item.rating}
              value={item.price}
              onPress={() => navigation.navigate('Product Info', {item})}
              />
              );
            }}
            keyExtractor={(item) => item.id}
            />
            )}
    </View>
  );
}
