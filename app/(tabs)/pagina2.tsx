import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/dordecabeca.png')}
          style={styles.logoImage}
          contentFit="cover"
        />
      </View>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">DESAFIOS DE UM VESTIBULANDO (ou quase isso)</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Quem sou eu?</ThemedText>
        <ThemedText>
          Estar no segundo ano do ensino médio e sentir que você está carregando o mundo nas costas não é exagero, é pura realidade. Quando essa fase vem acompanhada de uma escola técnica em tempo integral, a rotina vira um verdadeiro teste de sobrevivência logo cedo. O dia começa antes do sol nascer e já engata numa maratona pesada de aulas, relatórios compridos, laboratórios e provas que exigem tanto que, quando o sinal da saída toca no final da tarde, a sensação é de ter corrido uma maratona mental.{'\n\n'}

          Só que, para quem vive isso na pele, o portão da escola não é o fim da linha. Chegar em casa não significa se jogar no sofá e ligar a TV. É hora de colocar o papel de dono de casa em ação e encarar a limpeza, a louça e toda a arrumação do lar que simplesmente não espera. Depois de gastar o cérebro o dia todo, vem o gasto físico. E para fechar esse combo de esforço, ainda tem a rotina de treinos. Treinar é ótimo para descarregar a cabeça e manter a saúde em dia, mas no fim do dia, exige uma raça gigantesca para vestir a roupa de treino quando o corpo só pede cama.{'\n\n'}

          E como se tudo isso já não fosse o suficiente para preencher 24 horas, entra em cena o tal do sonho do vestibular. Mesmo estando no segundo ano, a vontade de sair na frente e garantir o futuro faz a gente inventar tempo de onde não tem para encaixar o cursinho, assistir a videoaulas e encarar pilhas de apostilas até tarde da noite. A cobrança interna é enorme, aquela sensação chata de que o tempo nunca é suficiente e que a gente sempre poderia estar fazendo mais.{'\n\n'}

          A verdade é que essa rotina é cansativa, esgota e muitas vezes faz a gente questionar como consegue dar conta de tudo. Mas encarar a rotina da casa, o treino, a escola técnica e o cursinho de uma vez só mostra uma maturidade e uma força absurdas. Não é uma fase fácil e nem precisa ser romantizada, mas cada dia vencido nessa loucura é um passo gigante em direção à aprovação. É um perrengue temporário que está construindo algo muito maior lá na frente.
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
  linkButton: {
    marginTop: 8,
    paddingVertical: 8,
  },
  linkText: {
    color: '#0a7ea4',
  },
});