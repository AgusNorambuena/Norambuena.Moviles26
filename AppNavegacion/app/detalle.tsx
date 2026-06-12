import { StyleSheet, Text, View, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function detalle() {

  const { nombre } = useLocalSearchParams(); 
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pantalla de Detalle</Text>
      
      
      <Text style={styles.subtexto}>Producto recibido: {nombre}</Text>
      
      <Button title="Volver" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 15 },
  texto: { fontSize: 20, fontWeight: 'bold' },
  subtexto: { fontSize: 16, color: 'green' }
});