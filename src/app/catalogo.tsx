import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Botao from '../components/Botao';
import FilmeCard from '../components/FilmeCard';

const FILMES = [
  { id: '1', titulo: 'Interestelar', genero: 'Ficção Científica', ano: 2014, imagem: require('../../assets/images/interestelar.jpg') },
  { id: '2', titulo: 'O Padrinho', genero: 'Crime', ano: 1972, imagem: require('../../assets/images/padrinho.jpg') },
  { id: '3', titulo: 'O Cavaleiro das Trevas', genero: 'Ação', ano: 2008, imagem: require('../../assets/images/batman.jpg') },
  { id: '4', titulo: 'Pulp Fiction', genero: 'Crime', ano: 1994, imagem: require('../../assets/images/pulpFiction.jpg') },
  { id: '5', titulo: 'Clube de Combate', genero: 'Drama', ano: 1999, imagem: require('../../assets/images/clube_de_combate.jpg') },
  { id: '6', titulo: 'A Origem', genero: 'Ficção Científica', ano: 2010, imagem: require('../../assets/images/AOrigem.jpg') },
];

export default function Catalogo() {
  const router = useRouter();

  useEffect(() => {
    console.log("Catálogo carregado");
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.lista}>
      {FILMES.map(filme => (
        <FilmeCard
          key={filme.id}
          titulo={filme.titulo}
          genero={filme.genero}
          ano={filme.ano}
          imagem={filme.imagem}
        />
      ))}

      <Botao titulo="Sobre o Aplicativo" onPress={() => router.push('/sobre')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  lista: {
    padding: 16,
  },
});