import React from "react";
import { View, Text, FlatList } from "react-native";

const ShopScreen = () => {
  // Ici, vous pouvez remplacer cette liste par les produits de votre boutique
  const products = [
    { id: "1", name: "Produit 1", points: 100 },
    { id: "2", name: "Produit 2", points: 200 },
    { id: "3", name: "Produit 3", points: 300 },
    // Ajoutez plus de produits ici...
  ];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Boutique de points
      </Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 20, margin: 10, backgroundColor: "#ddd" }}>
            <Text>{item.name}</Text>
            <Text>{item.points} points</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ShopScreen;
