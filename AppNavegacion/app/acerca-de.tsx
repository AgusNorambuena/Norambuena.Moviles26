import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function acercade() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pantalla Acerca De</Text>
      <Text style={styles.subtexto}>Versión de la App: 1.0.0</Text>
      
      
      <Button title="Volver al Inicio" onPress={() => router.dismissAll()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 15 },
  texto: { fontSize: 20, fontWeight: 'bold' },
  subtexto: { fontSize: 14, color: '#666' }
});