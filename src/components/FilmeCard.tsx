import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type FilmeProps = {
  titulo: string;
  genero: string;
  ano: number;
  imagem: string;
};

export default function FilmeCard({ titulo, genero, ano, imagem }: FilmeProps) {
  // estado de favorito
  const [favorito, setFavorito] = useState(false);
  const router = useRouter();

  const navegarParaDetalhes = () => {
    router.push({
      pathname: '/detalhes',
      params: { titulo, genero, ano, imagem },
    });
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressionado]}
      onPress={navegarParaDetalhes}
    >
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <View style={styles.info}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.detalhe}>{genero} • {ano}</Text>

        <Pressable
          onPress={() => setFavorito(!favorito)}
          style={styles.favoritoBtn}
        >
          <Text style={[styles.estrela, favorito && styles.estrelaAtiva]}>
            {favorito ? '★ Favorito' : '☆ Favoritar'}
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    marginVertical: 8,
    overflow: 'hidden',
  },
  cardPressionado: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  imagem: {
    width: 100,
    height: 150,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  titulo: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  detalhe: {
    color: '#CCC',
    fontSize: 14,
    marginBottom: 12,
  },
  favoritoBtn: {
    alignSelf: 'flex-start',
    padding: 8,
    backgroundColor: '#333',
    borderRadius: 6,
  },
  estrela: {
    color: '#888',
    fontWeight: 'bold',
  },
  estrelaAtiva: {
    color: '#FFD700',
  },
});