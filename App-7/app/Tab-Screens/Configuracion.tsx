import { View, Text } from 'react-native';

export function Configuracion() {
  return (
    <View style={{ flex: 1,alignContent : 'center',justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#00a0d1' }}>
        <View style={{ width: 200, height: 200, borderRadius: 100, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>
                Bienvenido a la Pantalla de configuracion
            </Text>
        </View>  
    </View>
  );
}