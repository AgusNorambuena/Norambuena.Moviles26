import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';



export default function Card({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <>
        <View style={styles.tarjeta1}>

            <Text style={styles.titulo}>{titulo}</Text>
            
            
            <View style={styles.contenido}>
                {children}
            </View>
        </View>

        <View style={styles.tarjeta1}>

            <Text style={styles.titulo}>{titulo}</Text>
            
            <Image source={{ uri: 'https://www.wikidex.net/wiki/Totodile_%28Sleep%29' }} style={{ width: 100, height: 100 }} />
            
            
            <View style={styles.contenido}>
                {children}
            </View>
        </View>
    </>

  );
}

const styles = StyleSheet.create({
  tarjeta1: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 4,
  },
  contenido: {
    // Estilos para el contenedor del texto/descripción
  },
});