import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import Botao from '../components/Botao';

export default function Detalhes() {
  const router = useRouter();
  const { titulo, genero, ano, imagem } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Image source={Number(imagem)} style={styles.imagem} />
      <Text style={styles.titulo}>{titulo}</Text>
      <View style={styles.infoBox}>
        <Text style={styles.texto}>Gênero: {genero}</Text>
        <Text style={styles.texto}>Ano: {ano}</Text>
      </View>
      <Botao titulo="Voltar ao Catálogo" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  imagem: {
    width: 200,
    height: 300,
    borderRadius: 12,
    marginBottom: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 32,
  },
  texto: {
    fontSize: 16,
    color: '#CCC',
    marginBottom: 8,
  },
});