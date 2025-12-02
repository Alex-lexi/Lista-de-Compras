
import { ShoppingCart } from 'lucide-react-native';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function TelaDeCadastro() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
          <Text style={styles.titulo}>Adicionar produto a lista</Text>
        <View style ={styles.containerDosComponentes}>
    
          <Image style={styles.imagem} source={{uri:"https://i.pinimg.com/474x/2e/6c/31/2e6c31a12e37810f970ae7d8851b8987.jpg" }}/>

          <View style={styles.containerDaCaixaDeTexto}>
              <TextInput style={styles.caixaDeTexto} placeholder ='Digite o nome do produto:' placeholderTextColor= "#7D4F50"/>
              <ShoppingCart style={styles.iconeCarrinho}/>
          </View>

          <Pressable style={styles.botaoDeEnviar}><Text style={{color:"#fff",}}>Inserir produto</Text></Pressable>  

        </View>
       
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsla(60, 2%, 89%, 1.00)',
    // justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
  }, titulo: {
    fontSize:18,
    fontWeight:700,
  }, containerDaCaixaDeTexto: {
    width:"100%",
    height:60,
    display: "flex",
    flexDirection: "row",
  },caixaDeTexto:{
    width:"100%",
    height:60,
    backgroundColor: '#ffffffff',
    borderWidth:1,
    borderColor:'#7D4F50',
    borderRadius:100,
    paddingLeft:15,
    position: "absolute",

  }, iconeCarrinho: {
    position: "relative",
    top: "29%",
    left: "88%",
  },botaoDeEnviar:{
    width:"100%",
    height:60,
    backgroundColor: '#7D4F50',
    borderRadius:100,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    },containerDosComponentes:{
    width:"100%",
    marginVertical: 68,
    display: "flex",
    gap: 12,
    alignItems: "center",
    },imagem:{
      width:250,
      height:250,
      resizeMode: "cover",
      borderRadius:150,

    }
  
});



