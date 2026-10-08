import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function ModalScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedText type="title" style={styles.title}>Minhas Motivações</ThemedText>
      <View style={styles.row}>
        <Image
          source={require('@/assets/images/foto2.png')}
          style={styles.image}
          contentFit="cover"
        />
        <ThemedView style={styles.textContainer}>
          <ThemedText type="subtitle">Fascinação em esportes</ThemedText>
          <ThemedText>
            Ingressei no jiu-Jitsu em 2020 
          </ThemedText>
        </ThemedView>
      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 24, 
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 16,          
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,             
    gap: 4,
  },
});