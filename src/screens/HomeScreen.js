import { View, Text, FlatList, Alert } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Button from '../components/Button';
import styles from '../styles/styles';
import buttonStyles from '../styles/button.styles';
import deletePerson from '../services/delete.js';

//Em projetos com Expo na versão 49 ou maior, as variáveis de ambiente só conseguem ser acessadas se tiver o prefixo: "EXPO_PUBLIC_NOME_DA_VARIAVEL"
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export default function HomeScreen({ navigation }) {
    const [person, setPerson] = useState([]);
    // O useEffect foi substituido pelo useFocusEffect para atualizar a lista toda vez que haver uma navegação entre telas, ou seja, quando a tela for focada. 
    // O useEffect só atualizava a lista quando a tela era carregada pela primeira vez.
    useFocusEffect(
        useCallback(() =>{ 
                refreshList() 
            }
        ,[])
    );

    async function refreshList() {
        await fetch(`${API_URL}/people`)
            .then((response) => response.json())
            .then((data) => setPerson(data))
            .catch((error) => console.error(error));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>People List</Text>
            {person.length > 0
                ? <View style={styles.listContainer}>
                    <FlatList
                        data={person}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <>
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>{item.firstname} {item.lastname}</Text>
                                    <Text style={styles.text}>{item.email}</Text>
                                    <View style={buttonStyles.buttonContainer}>
                                        <Button
                                            title="Delete Person" onPress={() => {
                                                Alert.alert("Delete Person", "Are you sure you want to delete this person?",
                                                    [{ text: "Cancel" },
                                                    {
                                                        text: "Delete", onPress: () => {
                                                            deletePerson(item.id).then(() => refreshList())
                                                        }
                                                    }])
                                            }}
                                            backgroundColor={"#f07d7d"} />
                                        <Button title="Edit Person" onPress={() => navigation.navigate('AddEdit', { person: item })} backgroundColor={"#b3b477"} />
                                    </View>
                                </View>
                            </>
                        )}
                    />
                </View>
                : <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>Nenhuma Pessoa Listada</Text>
            }
            <View style={buttonStyles.buttonContainer}>
                <View>
                    <Button title="Add Person" onPress={() => navigation.navigate('AddEdit')} backgroundColor={"#79b477"} />
                </View>
            </View>
        </View>
    );
}