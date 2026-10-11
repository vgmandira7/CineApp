import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Botao from '../components/Botao';
import FilmeCard from '../components/FilmeCard';

const FILMES = [
  { id: '1', titulo: 'Interestelar', genero: 'Ficção Científica', ano: 2014, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROk6VK47Shkn4HK1VxHC2yViJed3-h4tWbFOmvDUwQYw&s=10' },
  { id: '2', titulo: 'O Padrinho', genero: 'Crime', ano: 1972, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHZv_2vwPwQahcwERbA8ZnlIOKihKiLVpS4wTbwt5-w&s=10' },
  { id: '3', titulo: 'O Cavaleiro das Trevas', genero: 'Ação', ano: 2008, imagem: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
  { id: '4', titulo: 'Pulp Fiction', genero: 'Crime', ano: 1994, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToyqHZTPi62UffECQLDENKZcHobCfQemahA6_EDTktsw&s=10' },
  { id: '5', titulo: 'Clube de Combate', genero: 'Drama', ano: 1999, imagem: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg' },
  { id: '6', titulo: 'A Origem', genero: 'Ficção Científica', ano: 2010, imagem: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
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