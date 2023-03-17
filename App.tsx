import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import useCachedResources from "./src/CachedResources";
import { Navigation } from "./src/navigation/RootNavigation";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Navigation />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
});

//Fazer sistema de desconto