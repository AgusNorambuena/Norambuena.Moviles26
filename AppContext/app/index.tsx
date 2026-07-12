import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../Context/AuthContext';
import { useTema } from '../Context/TemaContext';

function PantallaLogin() {
  const { login } = useAuth();
  
  return (
    <View style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <Text style={styles.titulo}>Inicia Sesión para continuar</Text>
      <Button title="Iniciar Sesión" onPress={() => login('Yesica')} color="#00a0d1" />
    </View>
  );
}


function PantallaInicio() {
  const { usuario, logout } = useAuth();
  const { tema, alternarTema } = useTema();

  const esClaro = tema === 'claro';
  const fondoDinamico = esClaro ? '#ffffff' : '#333333';
  const textoDinamico = esClaro ? '#333333' : '#ffffff';
  const tarjetaFondo = esClaro ? '#f9f9f9' : '#444444';

  return (
    <View style={[styles.container, { backgroundColor: fondoDinamico }]}>
      <View style={[styles.caja, { backgroundColor: tarjetaFondo }]}>
        <Text style={[styles.bienvenida, { color: textoDinamico }]}>
          ¡Bienvenido querido usuario :D! 👋
        </Text>
        
        <Text style={{ color: textoDinamico, marginBottom: 15 }}>
          El tema actual es: **{tema.toUpperCase()}**
        </Text>

        <View style={styles.espacioBoton}>
          <Button title="Alternar Tema" onPress={alternarTema} color="#00a0d1" />
        </View>

        <View style={styles.espacioBoton}>
          <Button title="Cerrar Sesión" onPress={logout} color="#e74c3c" />
        </View>
      </View>
    </View>
  );
}


export default function App() {
  const { usuario } = useAuth();

  return usuario ? <PantallaInicio /> : <PantallaLogin />;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  caja: {
    padding: 25,
    borderRadius: 15,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  bienvenida: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  espacioBoton: {
    width: '100%',
    marginVertical: 6,
  }
});