import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#141414' },
        headerTintColor: '#E50914',
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: '#000000' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Início', headerShown: false }} />
      <Stack.Screen name="catalogo" options={{ title: 'Catálogo de Filmes' }} />
      <Stack.Screen name="detalhes" options={{ title: 'Detalhes do Filme' }} />
      <Stack.Screen name="sobre" options={{ title: 'Sobre' }} />
    </Stack>
  );
}