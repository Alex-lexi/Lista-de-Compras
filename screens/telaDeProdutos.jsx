import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TelaDeProdutos({ produtos }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Sua Lista de Produtos</Text>
      <ScrollView style={styles.listaContainer}>
        {produtos.length === 0 ? (
          <Text style={styles.textoListaVazia}>Nenhum produto na lista.</Text>
        ) : (
          produtos.map((produto, index) => (
            <View key={index} style={styles.itemDaLista}>
              <Text style={styles.textoDoItem}>{produto}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 40,
  },
  listaContainer: {
    paddingHorizontal: 20,
  },

  itemDaLista: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  textoDoItem: {
    fontSize: 18,
  },

  textoListaVazia: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginTop: 50,
  },
});
