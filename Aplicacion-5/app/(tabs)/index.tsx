import { Image } from 'expo-image';
import {  StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import { HelloWave } from '@/components/hello-wave';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';


export default function HomeScreen() {

  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  // 1. Estado para manejar el mensaje de error
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error("No se pudo conectar con el servidor");
        }
        return response.json();
      })
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al obtener datos:", err);
        setError("Hubo un problema al cargar los usuarios. Por favor, intenta más tarde.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#05b6ce' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
        Lista de usuarios
      </Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{
            padding: 10,
            marginBottom: 5,
            backgroundColor: '#f2f2f2',
            borderRadius: 10,
            maxWidth: 300,
          }}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#05b6ce',
    padding: 20
  },
  errorText: {
    color: '#0400ff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  }
});