import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [Alcool,setAlcool] = useState("20");
  const [Gasolina,setGasolina]= useState("3");
  const [resultado,setResultado]= useState("");
	
		function dividir(){
	  let r = Gasolina/Alcool;
	if(r<0,7){
		setResultado(<text>escolha gasolina</text>)
	}else{
			setResultado(<text>escolha alcool</text>)
			}
	
	return (
    <View style={styles.container}>
		<View style={styles.bloco}>
	  		<Text style={styles.titulo}>Calculadora Simples </Text>
		</View>
		<View style={styles.bloco}>
			<Text> Alcool: </Text>
			<TextInput 
				style={styles.input} 
				value={Alcool}
				onChangeText={(valor)=>setAlcool(valor)}
				keyboardType="numeric"
			/>
		</View>
		<View style={styles.bloco}>
			<Text> Gasolina: </Text>
			<TextInput 
				style={styles.input}
				value={Gasolina}
				onChangeText={(valor)=>setGasolina(valor)}
				keyboardType="numeric"
			/>
		</View>
		  <View style={styles.bloco}>
			<TouchableOpacity 
				style={styles.botao}
				onPress={dividir}
			>
				<Text style={styles.textoBotao}>dividir</Text>
			</TouchableOpacity>  
		</View>

		<View style={styles.bloco}>
			<Text style={styles.titulo}> 
				Resultado: {resultado}
			</Text>
		</View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bloco:{
	  marginTop:20,
	  width:'80%',
	  marginLeft:'10%'
  },
  titulo:{
	  fontSize:30,
	  textAlign:'center'
  },
  input:{
	borderWidth:2,
	fontSize:20,
	borderRadius:10
  },
  botao:{
	  backgroundColor:'#15BD',
	  borderRadius:10
  },
  textoBotao:{
	  color:'#FFF',
	  textAlign:'center',
	  fontSize:20
  }
});
