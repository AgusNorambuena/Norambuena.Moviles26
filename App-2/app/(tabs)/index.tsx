import { Image } from 'expo-image';
import { Button, Platform, StyleSheet } from 'react-native';
import { View, Text } from "react-native";
import Card from '@/components/card';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <>
    <View style={styles.stepContainer}>
      <ThemedView style={{ padding: 20 }}>
        <ThemedText>¡Hola desde React Native!</ThemedText>
      </ThemedView>

      <ThemedView style={{ padding: 20 }}>
        <Saludo />
      </ThemedView>

     <Card titulo="Info General">
        <Text style={[ { color: '#16a34a', fontWeight: '600' }]}>
          ● En línea
        </Text>
        <Image source={{ uri: 'https://www.wikidex.net/wiki/Totodile_%28Sleep%29' }}/>
        <Text>
          Salio bien.
        </Text>
        <Button
          title="Presionar"
          onPress={() => alert('Botón presionado')}
        />
      </Card>

    </View>
    </>

  );
}
function Saludo() {
return (
    <View style={styles.contenedor}>
      <ThemedText>Hola, soy un componente</ThemedText>
    </View>
);
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contenedor: {
    flex: 1,
    backgroundColor: '#059cd8', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepContainer: {
    flex: 1,                  
    backgroundColor: '#00ff2a', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  
});
