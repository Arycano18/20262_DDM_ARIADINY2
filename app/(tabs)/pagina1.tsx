import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('@/assets/images/fitdance1.jpeg')}
          style={styles.logoImage}
          contentFit="cover"
        />
      </View>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">MACHUQUEI MEUS JOELHOS NO FITDANCE 😭 </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Quem sou eu?</ThemedText>
        <ThemedText>
         É inacreditavel me machuquei dançando uma coreografia no fitdance, ao som de Sequência Striptease de Pedro Sampaio no dia 28/09 eu nem imaginava que uma batida no chão me resultaria em uma lesão chata! Após 
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
});