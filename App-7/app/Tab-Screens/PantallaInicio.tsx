
import { View, Text } from 'react-native';

export function PantallaInicio() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#ff0000' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        Bienvenido a la Pantalla de Inicio
      </Text>
      <Text style={{ fontSize: 14, marginTop: 10 }}>
        Esta es la pantalla principal de la aplicación.
      </Text>
    </View>
  );
}