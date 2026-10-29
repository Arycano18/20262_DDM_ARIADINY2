import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/fitdance1.jpeg')}
          style={styles.logoImage}
          contentFit="cover"
        />
      </View>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">MACHUQUEI MEUS JOELHOS NO FITDANCE 😭</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Notícia triste.</ThemedText>
        <ThemedText>
          É inacreditável! Me machuquei dançando uma coreografia no FitDance ao som de Sequência Striptease de Pedro Sampaio no dia 28/09. Eu nem imaginava que uma batida no chão me resultaria em uma lesão chata! Estou há 3 semanas com intensas dores no joelho direito e sem conseguir treinar o que eu mais amo: glúteos.{'\n\n'}
          Então, amigas, tomem cuidado nos movimentos para não resultar em lesões que te atrapalhem até em coisas simples do dia a dia, como subir uma escada. Lembrem-se de que somos jovens e nosso corpo tem uma capacidade incrível de se recuperar, mas não podemos negligenciar nossa saúde. Treinem com cuidado, bebam água, se alimentem bem e não caiam na loucura de aplicar medicamentos para emagrecer.{'\n\n'}
          Beijinhos, até a próxima notícia, com carinho aryzocas. 
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
  imageContainer: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  logoImage: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 20,
  },
});