import { View, Text } from 'react-native';

export function PantallaPerfil() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#3cff00' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        Bienvenido a la Pantalla del Perfil
      </Text>
      <Text style={{ fontSize: 14, marginTop: 10 }}>
        Esta es la pantalla principal de tu perfil.
      </Text>
    </View>
  );
}