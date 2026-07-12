import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#6200ee' },
        headerTintColor: '#fff',
      }}
    >
      
      <Stack.Screen name="index" options={{ title: 'Inicio' }} />
      <Stack.Screen name="detalle" options={{ title: 'Información del Producto' }} />
      <Stack.Screen name="acerca-de" options={{ title: 'Acerca De' }} />
    </Stack>
  );
}
