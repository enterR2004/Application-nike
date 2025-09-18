import React from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo cinza grande de fundo */}
      <Text style={styles.bigLogo}>NIKE</Text>

      {/* Imagem do tênis ciano com branco */}
      <Image 
        source={require("../assets/images/shoe-cyan-white.png")} 
        style={styles.shoe} 
        resizeMode="contain"
      />

      {/* Título */}
      <Text style={styles.title}>LOGIN</Text>

      {/* Campos de login */}
      <TextInput 
        placeholder="E-MAIL" 
        style={styles.input} 
        placeholderTextColor="#999" 
      />
      <TextInput 
        placeholder="SENHA" 
        secureTextEntry={true} 
        style={styles.input} 
        placeholderTextColor="#999" 
      />

      {/* Botão de entrar */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("Product")}
      >
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  bigLogo: {
    position: "absolute",
    top: 100,
    fontSize: 100,
    color: "#E1E0E0",
    fontWeight: "bold",
    zIndex: -1, // fica atrás dos outros elementos
  },
  shoe: {
    width: 250,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#144273",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 15,
    marginVertical: 8,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#F2C94C",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#144273",
  },
});
