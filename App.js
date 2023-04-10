
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./img/heart.png')} 
       style={{width: 60, height: 60}} />
      <Text  style={{fontSize: 40}}>Health Saúde</Text>

      <TextInput 
        style={styles.input}
        placeholder="Nome Completo"
        keyboardType="default">
      </TextInput>

      <TextInput 
        style={styles.input}
        placeholder="Insira seu email"
        keyboardType="email-address">
      </TextInput>
      
      <TextInput 
        style={styles.input}
        placeholder="Telefone"
        keyboardType="phone-pad">
      </TextInput>

      <TouchableOpacity style={styles.button}>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#979797',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'flex-end',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width:200,
    borderRadius:10
  },
  input: {
    width:200,
    height: 40,
    alignItems: 'flex-start',
    margin: 12,
    backgroundColor: '#FFF',
    borderWidth: 1,
    padding: 10,
  },
});
