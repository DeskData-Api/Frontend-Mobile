import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Substitua pelo conjunto de ícones que preferir

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem Vindo ao DeskData</Text>
        <Text style={styles.subtitle}>Veja as análises mais recentes</Text>
        <View style={styles.separator}></View>
      </View>

      <View style={styles.placeholdersWrapper}>
        <Text style={styles.title}>Análises diárias</Text>
        <View style={styles.placeholdersRow}>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Graph PlaceHolder</Text>
          </View>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Graph PlaceHolder</Text>
          </View>
        </View>

        <View style={styles.placeholdersRow}>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Graph PlaceHolder</Text>
          </View>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Graph PlaceHolder</Text>
          </View>
        </View>

        {/* Substituir o texto pelo botão */}
        <TouchableOpacity style={styles.moreInfoButton} onPress={() => console.log("Mais informações")}>
          <Text style={styles.moreInfoText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: height * 0.05, gap: height * 0.02 },
  header: { alignItems: 'center' },
  title: { fontSize: 20, color: '#888' },
  subtitle: { fontSize: 20, color: '#6ce' },
  separator: { backgroundColor: 'gray', width: width, height: height * 0.001, marginTop: height * 0.01 },
  placeholdersWrapper: { width: width * 0.95, height: height * 0.7, backgroundColor: '#9993', borderRadius: width * 0.05, justifyContent: 'space-evenly', alignItems: 'center' },
  placeholdersRow: { flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' },
  placeholder: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#444', width: width * 0.43, height: width * 0.43, borderRadius: width * 0.05 },
  placeholderText: { color: 'white', textAlign: 'center' },
  moreInfoButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#999', borderRadius: width,width:width*0.15, height:width*0.15  },
  moreInfoText: { color: '#6ce', fontSize: 22,textAlign:'center' }
});
