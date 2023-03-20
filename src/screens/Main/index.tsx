import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  RefreshControl
} from "react-native";
import ListItem from "../../components/ListItem";
import { CartContext } from "../../context/CartContext";
import Request from "../../data/Request";
import { styles } from "./styles";

export default function Main({ navigation }) {
  const [db, setDb] = useState<any[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const context = useContext(CartContext);
  
  

  async function loadDb() {
    setLoading(true);
    // const res = await Request.getAllProducts();
    try {
      const response = await Request.fetchWithTimeout({timeout: 6000});
      setDb(response);
      setError(false);
      setLoading(false);
    }
    catch(err){
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDb();

  }, []);


  return (
    <View style={styles.container}>
      <RefreshControl  refreshing={loading} onRefresh={loadDb} >
      {loading ? (
        <ActivityIndicator animating={loading} style={{ paddingTop: "75%" }} color="#DEB841" size={100} />
        ) : !error ? (
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
            ) : (<View style={styles.card}>
                  <View style={styles.cardContent}>
                <Text style={styles.title}> Itens could not be loaded </Text>
                <TouchableOpacity style={styles.btn} onPress={loadDb}><Text style={styles.btn}>Try again</Text></TouchableOpacity>
                </View>
                  </View>
                )}
            </RefreshControl>
    </View>
  );
}
