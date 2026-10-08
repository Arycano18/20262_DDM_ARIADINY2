import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('@/assets/images/foto1.png')}
          style={styles.logoImage}
          contentFit="cover"
        />
      </View>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sejam Bem Vindos ao meu Blog, Aryzocers</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Quem sou eu?</ThemedText>
        <ThemedText>
          Me chamo Ariadiny, tenho 16 anos e moro em Itanhém. Desde que respondo por mim me considero uma pessoa curiosa alegre e divertida. Amo meus hobbies e estar ao lado de quem amo.
          Curso informática para Internet na ETEC de Itanháem, inclusive está pagina é um trabalho escolar. 
        </ThemedText>
      </ThemedView>
  
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Minhas motivações pessoais</ThemedText>
        <ThemedText>
          Acompanhe um pouco da minha vida:
        </ThemedText>
        
        <Link href="/modal" style={styles.linkButton}>
          <ThemedText type="defaultSemiBold" style={styles.linkText}>
          Clique aqui para ver fotos e relatos.
          </ThemedText>
        </Link>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Veja mais</ThemedText>
        <ThemedText>
          Se você gosta de conteúdos sobre musculação, jiu jitsu, esportes, vestibular, mpb e livros me acompanhe para mais! Beijinhos!
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  headerContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'flex-start', // Alinha a imagem no canto esquerdo
    backgroundColor: '#A1CEDC',
    borderRadius: 16,
    paddingLeft: 16, // Espaçamento na esquerda
    marginBottom: 16,
    overflow: 'hidden',
  },
  logoImage: {
    height: 160,
    width: 160,
    borderRadius: 80, // Mantém a foto circular e destacada
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 20,
  },
  linkButton: {
    marginTop: 8,
    paddingVertical: 8,
  },
  linkText: {
    color: '#0a7ea4',
  },
});