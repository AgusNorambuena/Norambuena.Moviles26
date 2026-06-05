import { Image } from 'expo-image';
import { Platform, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useEffect, useState } from "react";
import { View, Text } from 'react-native-reanimated/lib/typescript/Animated';



export default function HomeScreen() {
  const [usuarios, setUsuarios] = useState([]);
const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users&#39")
        .then(res =>res.json())
        .then(json => {
        setUsuarios(json);
        setLoading(false);

        }); 
    }, []);


    if (loading) {
      return <ActivityIndicator size="large" color="green"/>;
    }
  return (
    <>
      <View>
        <Text>
          Lista de usuario
        </Text>
      </View>
    </>
  );
}

// &lt;View style={{ flex: 1, padding: 20 }}&gt;
// &lt;Text style={{ fontSize: 20, fontWeight: &#39;bold&#39;, marginBottom: 10 }}&gt;
// Lista de usuarios
// &lt;/Text&gt;
// &lt;FlatList
// data={usuarios}
// keyExtractor={item =&gt; item.id.toString()}
// renderItem={({ item }) =&gt; (
// &lt;View style={{
// padding: 10,
// marginBottom: 5,
// backgroundColor: &#39;#f2f2f2&#39;,
// borderRadius: 10
// }}&gt;
// &lt;Text style={{ fontWeight: &#39;bold&#39; }}&gt;{item.name}&lt;/Text&gt;
// &lt;Text&gt;{item.email}&lt;/Text&gt;
// &lt;/View&gt;
// )}
// /&gt;
// &lt;/View&gt;
// );
// }

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
