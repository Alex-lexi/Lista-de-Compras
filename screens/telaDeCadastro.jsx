// Importações Originais ---
import { ShoppingCart } from 'lucide-react-native';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//  Importar o 'useState' e o 'useNavigation' 
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

//  A tela agora recebe a propriedade 'onAdicionarProduto' ---
export default function TelaDeCadastro({ onAdicionarProduto }) {

  //  Criar um estado para guardar o texto digitado 
  const [nomeProduto, setNomeProduto] = useState('');
  const navigation = useNavigation(); // Para poder trocar de tela

  // Criar a função que será chamada pelo botão 
  const handleInserirProduto = () => {
    // Se o campo estiver vazio, não faz nada.
    if (nomeProduto.trim() === '') {
      alert('Digite um produto!');
      return;
    }
    // Chama a função que veio do App.js para adicionar o item na lista principal.
    onAdicionarProduto(nomeProduto);
    // Limpa o campo de texto.
    setNomeProduto('');
    // Leva o usuário para a tela da lista.
    navigation.navigate('Produtos');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Adicionar produto a lista</Text>
        <View style={styles.containerDosComponentes}>

          <Image style={styles.imagem} source={{ uri: "https://i.pinimg.com/474x/2e/6c/31/2e6c31a12e37810f970ae7d8851b8987.jpg" }} />

          <View style={styles.containerDaCaixaDeTexto}>
            {/* --- MODIFICAÇÃO 5: Conectar o TextInput ao estado --- */}
            <TextInput
              style={styles.caixaDeTexto}
              placeholder='Digite o nome do produto:'
              placeholderTextColor="#7D4F50"
              value={nomeProduto} // Mostra o valor do estado
              onChangeText={setNomeProduto} // Atualiza o estado quando o usuário digita
            />
            <ShoppingCart style={styles.iconeCarrinho} color="#7D4F50" />
          </View>

          {/* --- MODIFICAÇÃO 6: Chamar a função 'handleInserirProduto' ao clicar --- */}
          <Pressable style={styles.botaoDeEnviar} onPress={handleInserirProduto}>
            <Text style={{ color: "#fff", }}>Inserir produto</Text>
          </Pressable>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
   );
}

// Seus estilos originais, com uma pequena correção no ícone do carrinho
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsla(60, 2%, 89%, 1.00)',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  titulo: {
    fontSize: 18,
    fontWeight: '700', // '700' é uma string
  },
  containerDaCaixaDeTexto: {
    width: "100%",
    height: 60,
    // As propriedades 'display' e 'flexDirection' não são necessárias aqui
    // pois o ícone será posicionado de forma absoluta.
    justifyContent: 'center', // Ajuda a alinhar o ícone verticalmente
  },
  caixaDeTexto: {
    width: "100%",
    height: 60,
    backgroundColor: '#ffffffff',
    borderWidth: 1,
    borderColor: '#7D4F50',
    borderRadius: 100,
    paddingLeft: 15,
    paddingRight: 45, // Adicionado espaço para o ícone não sobrepor o texto
    // 'position: absolute' removido pois não é necessário
  },
  iconeCarrinho: {
    position: "absolute", // Posição absoluta em relação ao 'containerDaCaixaDeTexto'
    right: 20, // Posicionado à direita
  },
  botaoDeEnviar: {
    width: "100%",
    height: 60,
    backgroundColor: '#7D4F50',
    borderRadius: 100,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});
