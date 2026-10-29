import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function PageThreeScreen() {
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
        <ThemedText type="title">COMIDA, TREINO E PAZ DE ESPÍRITO 🥗</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Chega de neura!</ThemedText>
        <ThemedText>
          Quem vive na correria entre escola técnica, vestibulares e treinos sabe que a pressão estética na internet é uma armadilha silenciosa. Todo santo dia aparece alguém dizendo o que você deve comer, quantas horas precisa malhar ou qual é o "corpo ideal". Mas a real? A nossa saúde mental vale muito mais do que qualquer padrão impossível.{'\n\n'}

          Antigamente, qualquer escorregada na dieta gerava uma culpa desnecessária. Hoje em dia, entendi que comer um doce ou faltar um dia no treino porque o cansaço venceu não estraga o progresso de ninguém. Cuidar de si mesma tem que ser um ato de carinho, e não uma punição. Se o corpo pediu descanso, dar esse descanso é um ato de maturidade, não de preguiça.{'\n\n'}

          O segredo está no equilíbrio (mesmo que às vezes pareça impossível de achar). Comer bem para ter energia nas aulas, treinar porque é divertido e faz bem para a cabeça, e principalmente: aprender a rir dos perrengues do dia a dia. A gente não precisa ser perfeita em tudo, o tempo todo.{'\n\n'}

          Então fica o lembrete de hoje: pegue leve com você mesma. Você já faz coisa pra caramba! Beijinhos, e até a próxima reflexão. 🤍
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
    height: 220,
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