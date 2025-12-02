
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function TelaDeProduto() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style ={styles.containerDosComponentes}>
    
          <Text style={styles.titulo}>Produtos</Text>

        </View>
       
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: 'hsla(60, 2%, 89%, 1.00)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  }, titulo: {
    fontSize:25,
    fontWeight:700,
  }, caixaDeTexto:{
    width:"100%",
    height:60,
    backgroundColor: '#ffffffff',
    borderWidth:1,
    borderColor:'#7D4F50',
    borderRadius:100,
    paddingLeft:15,

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
    display: "flex",
    gap: 12,
    alignItems: "center",
    },imagem:{
      width:200,
      height:200,
      resizeMode: "cover",
      borderRadius:100,

    }
  
});



