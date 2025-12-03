// Importa o React e a função 'useState' para guardar a lista
import React, { useState } from 'react';

// Importa as coisas necessárias para a navegação com abas
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importa os ícones para as abas
import { Home, List } from 'lucide-react-native';

// Importa as duas telas que criamos
import TelaDeCadastro from './screens/telaDeCadastro';
import TelaDeProdutos from './screens/telaDeProdutos';

// Cria a ferramenta para fazer as abas
const Tab = createBottomTabNavigator();

// Este é o componente principal do seu aplicativo
export default function App() {

  // Aqui criamos a nossa lista de produtos. Ela começa vazia.
  // 'listaProdutos' é a lista em si.
  // 'setListaProdutos' é a função que usamos para mudar a lista.
  const [listaProdutos, setListaProdutos] = useState([]);

  // Esta função adiciona um novo produto na lista.
  // Ela será usada pela TelaDeCadastro.
  const adicionarProdutoNaLista = (produto) => {
    // Pega a lista antiga, e adiciona o novo produto no final.
    const novaLista = [...listaProdutos, produto];
    // Atualiza a lista de produtos para ser essa nova lista.
    setListaProdutos(novaLista);
  };

  return (
    <NavigationContainer>
      {/* Tab.Navigator é o que desenha as abas em baixo */}
      <Tab.Navigator>

        {/* Aba 1: Cadastro */}
        <Tab.Screen
          name="Lista de Compras"
          // Aqui passamos a função para a tela de cadastro poder usá-la
          children={() => <TelaDeCadastro onAdicionarProduto={adicionarProdutoNaLista} />}
          options={{
            // Esconde o título no topo da tela
            // Define o ícone da aba
            tabBarIcon: ({ color }) => <Home color={color} size={24} />,
          }}
        />

        {/* Aba 2: Produtos */}
        <Tab.Screen
          name="Produtos"
          // Aqui passamos a lista de produtos para a tela de produtos poder mostrá-la
          children={() => <TelaDeProdutos produtos={listaProdutos} />}
          options={{
      
            tabBarIcon: ({ color }) => <List color={color} size={24} />,
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
