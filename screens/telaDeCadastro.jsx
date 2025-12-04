import { ShoppingCart } from "lucide-react-native";
import {Image,Pressable,StyleSheet,Text,TextInput,View,} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function TelaDeCadastro({ onAdicionarProduto }) {
  const [nomeProduto, setNomeProduto] = useState("");
  const navigation = useNavigation();

  const handleInserirProduto = () => {
    if (nomeProduto.trim() === "") {
      alert("Digite um produto!");
      return;
    }

    onAdicionarProduto(nomeProduto);

    setNomeProduto("");

    navigation.navigate("Produtos");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Adicionar produto a lista</Text>
        <View style={styles.containerDosComponentes}>
          <Image
            style={styles.imagem}
            source={{
              uri: "https://i.pinimg.com/474x/2e/6c/31/2e6c31a12e37810f970ae7d8851b8987.jpg",
            }}
          />

          <View style={styles.containerDaCaixaDeTexto}>
            <TextInput
              style={styles.caixaDeTexto}
              placeholder="Digite o nome do produto:"
              placeholderTextColor="#7D4F50"
              value={nomeProduto}
              onChangeText={setNomeProduto}
            />
            <ShoppingCart style={styles.iconeCarrinho} color="#7D4F50" />
          </View>

          <Pressable
            style={styles.botaoDeEnviar}
            onPress={handleInserirProduto}
          >
            <Text style={{ color: "#fff" }}>Inserir produto</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsla(60, 2%, 89%, 1.00)",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "700",
  },
  containerDaCaixaDeTexto: {
    width: "100%",
    height: 60,

    justifyContent: "center",
  },
  caixaDeTexto: {
    width: "100%",
    height: 60,
    backgroundColor: "#ffffffff",
    borderWidth: 1,
    borderColor: "#7D4F50",
    borderRadius: 100,
    paddingLeft: 15,
    paddingRight: 45,
  },
  iconeCarrinho: {
    position: "absolute",
    right: 20,
  },
  botaoDeEnviar: {
    width: "100%",
    height: 60,
    backgroundColor: "#7D4F50",
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerDosComponentes: {
    width: "100%",
    marginVertical: 68,
    display: "flex",
    gap: 12,
    alignItems: "center",
  },
  imagem: {
    width: 250,
    height: 250,
    resizeMode: "cover",
    borderRadius: 150,
  },
});
