import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Inicio() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pantalla de Inicio</Text>
      
      
      <Button 
        title="Ir a Detalle" 
        onPress={() => router.push({
          pathname: '/detalle',
          params: { nombre: 'Laptop Gamer' } 
        })}
      />
      
      <View style={{ marginTop: 10 }}>
        <Button 
          title="Ir a Acerca De" 
          onPress={() => router.push('/acerca-de')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
  texto: { fontSize: 20, fontWeight: 'bold' }
});
