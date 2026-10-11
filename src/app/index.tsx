import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Botao from '../components/Botao';

export default function Inicio() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3171/3171927.png' }} 
        style={styles.logo} 
      />
      <Text style={styles.titulo}>CineApp</Text>
      <Text style={styles.descricao}>
        Seu catálogo interativo de filmes. Acompanhe seus filmes favoritos em um só lugar.
      </Text>
      
      <Botao titulo="Acessar o Catálogo" onPress={() => router.push('/catalogo')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    tintColor: '#E50914',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: '#CCC',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
});