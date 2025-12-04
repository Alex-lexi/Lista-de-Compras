import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, List } from 'lucide-react-native';
import TelaDeCadastro from './screens/telaDeCadastro';
import TelaDeProdutos from './screens/telaDeProdutos';


const Tab = createBottomTabNavigator();


export default function App() {

 
  const [listaProdutos, setListaProdutos] = useState([]);

  
  const adicionarProdutoNaLista = (produto) => {
    
    const novaLista = [...listaProdutos, produto];
    
    setListaProdutos(novaLista);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Lista de Compras"
          children={() => <TelaDeCadastro onAdicionarProduto={adicionarProdutoNaLista} />}
          options={{
          tabBarIcon: ({ color }) => <Home color={color} size={24} />,
          }}
        />

        <Tab.Screen
          name="Produtos"
          children={() => <TelaDeProdutos produtos={listaProdutos} />}
          options={{
      
            tabBarIcon: ({ color }) => <List color={color} size={24} />,
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
