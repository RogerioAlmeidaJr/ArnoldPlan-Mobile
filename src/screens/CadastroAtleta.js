import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, Text } from 'react-native';
import styles from './styles/styles';

export default function CAScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
    <Text style={styles.upTxt}>CADASTRAR ATLETA</Text>
    <Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>CADASTRAR</Text>
      </Pressable>
      <Text></Text>
    </View>
  );
}