import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {PantallaInicio} from './Tab-Screens/PantallaInicio';
import {PantallaPerfil} from './Tab-Screens/PantallaPerfil';
import {Configuracion} from './Tab-Screens/Configuracion';

import { AcercaDe } from './Drawer-Screens/AcercaDe';
import { Salir } from './Drawer-Screens/Salir';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



function LoginScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
        Pantalla de Login
      </Text>
      <Button title="Iniciar sesión" onPress={onLogin} color="#00a0d1" />
    </View>
  );
}


function NavegacionTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Inicio" component={PantallaInicio} />
      <Tab.Screen name="Perfil" component={PantallaPerfil} />
      <Tab.Screen name="Configuración" component={Configuracion} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [autenticado, setAutenticado] = useState(false);

  return (
    <>

      {autenticado ? (
        <Drawer.Navigator initialRouteName="RaizTabs">
          
          <Drawer.Screen 
            name="RaizTabs" 
            component={NavegacionTabs} 
            options={{ title: 'Inicio General' }} 
          />
          
          <Drawer.Screen name="Acerca de" component={AcercaDe} />
          
          <Drawer.Screen 
            name="Salir" 
            component={Salir}
            options={{
              title: 'Salir'
            }}
            listeners={{
              drawerItemPress: (e) => {
                e.preventDefault();
                setAutenticado(false);
              }
            }}
          />

        </Drawer.Navigator>
      ) : (
        // Si no está autenticado, va al login directo
        <LoginScreen onLogin={() => setAutenticado(true)} />
      )}
    </>
  );
}