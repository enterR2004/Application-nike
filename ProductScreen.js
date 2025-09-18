import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      {/* Logo grande no fundo */}
      <Text style={styles.bigLogo}>NIKE</Text>

      {/* Imagem principal do tênis */}
      <Image 
        source={require("../assets/images/shoe-cyan-white.png")} 
        style={styles.mainShoe} 
        resizeMode="contain"
      />

      {/* Miniaturas */}
      <View style={styles.thumbnails}>
        <Image 
          source={require("../assets/images/shoe-cyan-white.png")} 
          style={styles.thumb} 
        />
        <Image 
          source={require("../assets/images/shoe-blue-white.png")} 
          style={styles.thumb} 
        />
        <Image 
          source={require("../assets/images/shoe-red-white.png")} 
          style={styles.thumb} 
        />
      </View>

      {/* Descrição */}
      <Text style={styles.description}>
        Tênis Nike Air Max edição especial, perfeito para performance e estilo.
      </Text>

      {/* Preço */}
      <Text style={styles.price}>R$ 799,90</Text>

      {/* Botão comprar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>COMPRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  bigLogo: {
    position: "absolute",
    top: 80,
    fontSize: 90,
    color: "#E1E0E0",
    fontWeight: "bold",
    zIndex: -1,
  },
  mainShoe: {
    width: 280,
    height: 200,
    marginTop: 40,
    marginBottom: 20,
  },
  thumbnails: {
    flexDirection: "row",
    marginBottom: 20,
  },
  thumb: {
    width: 70,
    height: 50,
    marginHorizontal: 5,
    resizeMode: "contain",
  },
  description: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 15,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#144273",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#F2C94C",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#144273",
  },
});
