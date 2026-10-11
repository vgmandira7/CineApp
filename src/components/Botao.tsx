import { Pressable, StyleSheet, Text } from 'react-native';

type BotaoProps = {
  titulo: string;
  onPress: () => void;
};

export default function Botao({ titulo, onPress }: BotaoProps) {
  return (
    <Pressable
      // Alteração visual
      style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#E50914',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  botaoPressionado: {
    backgroundColor: '#FFF',
    opacity: 0.8,
  },
  texto: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});