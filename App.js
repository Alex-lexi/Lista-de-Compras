import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaDeCadastro from './screens/telaDeCadastro';
import TelaDeProduto from './screens/telaDeProdutos';


export default function App() {

 const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="home" component={TelaDeCadastro}/>
          <Tab.Screen name="segunda tela" component={TelaDeProduto}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

