import { Slot } from 'expo-router';
import { TemaProvider } from '../Context/TemaContext';
import { AuthProvider } from '../Context/AuthContext';

export default function RootLayout() {
  return (
    <TemaProvider>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </TemaProvider>
  );
}