// Importa o React
import React from 'react';

// Importa os componentes visuais
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// A tela recebe a lista de 'produtos' que veio do App.js
export default function TelaDeProdutos({ produtos }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Sua Lista de Produtos</Text>

      {/* ScrollView permite que a lista seja rolável se ficar muito grande */}
      <ScrollView style={styles.listaContainer}>
        {
          // Se a lista estiver vazia (produtos.length === 0), mostra uma mensagem.
          produtos.length === 0 ? (
            <Text style={styles.textoListaVazia}>Nenhum produto na lista.</Text>
          ) : (
            // Se a lista tiver itens, usamos o '.map()' para criar um <Text> para cada produto.
            // '.map()' é como um "para cada produto na lista, faça isso:".
            produtos.map((produto, index) => (
              <View key={index} style={styles.itemDaLista}>
                <Text style={styles.textoDoItem}>{produto}</Text>
              </View>
            ))
          )
        }
      </ScrollView>
    </SafeAreaView>
  );
}

// Estilos para a tela da lista
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 40,
  },
  listaContainer: {
    paddingHorizontal: 20, // Espaço nas laterais da lista
  },
  // Estilo para cada caixinha de produto na lista
  itemDaLista: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10, // Espaço entre os itens
  },
  textoDoItem: {
    fontSize: 18,
  },
  // Estilo para a mensagem de "lista vazia"
  textoListaVazia: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    marginTop: 50,
  },
});
