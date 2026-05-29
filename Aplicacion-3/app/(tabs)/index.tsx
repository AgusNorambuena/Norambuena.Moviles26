import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <view style={styles.caja1}>

        <Text style={[styles.texto, styles.activo ? styles.activo : styles.inactivo]}>
          Texto dinámico
        </Text>

      </view>
      <view style={styles.caja2}>

      </view>
      <view style={styles.caja3}>

      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  caja1: {
    backgroundColor: "red",
    height: 100,
    width: 100,
  },
  caja2: {
    backgroundColor: "green",
    height: 100,
    width: 100,
  },
  caja3: {
    backgroundColor: "blue",
    height: 100,
    width: 100,
  },
  titleContainer: {
    margin: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  texto: { fontSize: 20,
    backgroundColor: "blue",

   },
  activo: { color: "green" },
  inactivo: { color: "gray" },
});
