import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Botao from '../components/Botao';

export default function Sobre() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre o CineApp</Text>
      <View style={styles.card}>
        <Text style={styles.texto}>Nome: CineApp</Text>
        <Text style={styles.texto}>Disciplina: Programação para Dispositivos Móveis I</Text>
        <Text style={styles.texto}>Versão: 1.0.0</Text>
        <Text style={styles.texto}>Finalidade: Catálogo Interativo de Filmes</Text>
      </View>
      <Botao titulo="Voltar ao Catálogo" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 8,
    marginBottom: 30,
  },
  texto: {
    fontSize: 16,
    color: '#CCC',
    marginBottom: 10,
  },
});