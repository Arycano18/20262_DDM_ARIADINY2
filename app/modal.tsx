import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title" style={styles.title}>Minhas Motivações</ThemedText>

      {/* Bloco 1: Foto na ESQUERDA, Texto na DIREITA */}
      <View style={styles.row}>
        <Image
          source={require('@/assets/images/foto2.png')}
          style={styles.image}
          contentFit="cover"
        />
        <ThemedView style={styles.textContainer}>
          <ThemedText type="subtitle">Primeiro Tópico</ThemedText>
          <ThemedText>
            Luto Jiu Jitdu
          </ThemedText>
        </ThemedView>
      </View>

      {/* Bloco 2: Texto na ESQUERDA, Foto na DIREITA */}
      <View style={styles.row}>
        <ThemedView style={styles.textContainer}>
          <ThemedText type="subtitle">Segundo Tópico</ThemedText>
          <ThemedText>
            Este é o texto explicativo sobre a segunda foto, alinhado à esquerda.
          </ThemedText>
        </ThemedView>
        <Image
          source={require('@/assets/images/foto2.png')} // Substitua pelo nome do seu arquivo
          style={styles.image}
          contentFit="cover"
        />
      </View>

      {/* Bloco 3: Foto na ESQUERDA, Texto na DIREITA (Repetindo o padrão) */}
      <View style={styles.row}>
        <Image
          source={require('@/assets/images/foto3.png')} // Substitua pelo nome do seu arquivo
          style={styles.image}
          contentFit="cover"
        />
        <ThemedView style={styles.textContainer}>
          <ThemedText type="subtitle">Terceiro Tópico</ThemedText>
          <ThemedText>
            Este é o texto explicativo sobre a terceira foto.
          </ThemedText>
        </ThemedView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 24, // Espaçamento entre cada bloco
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row', // Coloca os itens lado a lado
    alignItems: 'center', // Centraliza verticalmente o texto com a imagem
    gap: 16,             // Espaço entre a imagem e o texto
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,             // Faz o texto ocupar todo o espaço restante na linha
    gap: 4,
  },
});