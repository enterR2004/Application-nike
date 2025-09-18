import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo no topo */}
      <Image 
        source={require("../assets/images/nike-logo-white.png")} 
        style={styles.logo} 
      />

      {/* Imagem do tênis */}
      <Image 
        source={require("../assets/images/shoe-cyan-white.png")} 
        style={styles.shoe} 
        resizeMode="contain"
      />

      {/* Texto principal */}
      <Text style={styles.title}>SUMMER {"\n"} COLLECTIONS <Text style={styles.year}>2022</Text></Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque vitae porta ante. Suspendisse a massa vitae justo 
        lacinia accumsan.
      </Text>

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>COMEÇAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2ED982",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  logo: {
    width: 60,
    height: 20,
    alignSelf: "flex-start",
    marginTop: 40,
  },
  shoe: {
    width: 280,
    height: 200,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#144273",
    textAlign: "center",
  },
  year: {
    color: "#FFFFFF",
    fontSize: 30,
  },
  description: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#F2C94C",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#144273",
  },
});
