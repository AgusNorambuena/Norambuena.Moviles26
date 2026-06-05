import { Image } from 'expo-image';
import { Platform, StyleSheet,View,Text,Button, TextInput } from 'react-native';
import { useState } from 'react';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");
  const [Contraseña, setContraseña] = useState("");
  return (
    
    <>
      <View>
        <Text style={styles.titleContainer}>
          Contador
        </Text>
        <Text>
          Contador :{contador}
        </Text>
        <Button title='Sumar' onPress={() => setContador(contador + 1)}>

        </Button>

        <Text style={styles.titleContainer}>
          Formulario
        </Text>
        <View style={styles.formulario}>
          <Text style={styles.textoform}>
            Nombre:
          </Text>
          <TextInput style={{ borderWidth: 1, padding: 8, marginTop: 10 , marginLeft: 5, height: 30, width: 100}}
          placeholder="Escribi aqui"
          value={nombre}
          onChangeText={setNombre}></TextInput>
        </View>

        <View style={styles.formulario}>
          <Text style={styles.textoform}>
            Contraseña:
          </Text>
          <TextInput style={{ borderWidth: 1, padding: 8, marginTop: 10 , marginLeft: 5, height: 30, width: 100}}
          placeholder="Escribi aqui"
          value={Contraseña}
          onChangeText={setContraseña}></TextInput>
        </View>
    
      
      </View>
      {nombre !== "" && Contraseña !== "" && (
        <View >
          <Text style={styles.resultado} >¡Campos completos!</Text>
          <Text style={styles.resultado}>
            Nombre y Contraseña: {nombre} {Contraseña}
          </Text>
        </View>
      )}


    </>
  );
}

const styles = StyleSheet.create({
  formulario: {
    flexDirection: "row",
    textAlign: "center",
    
  },
  textoform: {
    fontSize: 15,
    justifyContent: "center",
    alignSelf: "center",
  },
  titleContainer: {
    fontSize: 30,
    color: "blue",
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  resultado:{
    fontSize: 20
  }
  
});
