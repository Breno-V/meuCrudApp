import { View, Text, Alert } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Button from '../components/Button';
import Search from '../components/Search.js';
import Loading from '../components/Loading.js';
import styles from '../styles/styles';
import buttonStyles from '../styles/button.styles';
import { deletePerson } from '../servers/personCrud.js';

//Em projetos com Expo na versão 49 ou maior, as variáveis de ambiente só conseguem ser acessadas se tiver o prefixo: "EXPO_PUBLIC_NOME_DA_VARIAVEL"
const API_URL = process.env.EXPO_PUBLIC_API_URL;

export default function HomeScreen({ navigation }) {
    const [person, setPerson] = useState([]);
    const [loading, setLoading] = useState(true);
    // O useEffect foi substituido pelo useFocusEffect para atualizar a lista toda vez que haver uma navegação entre telas, ou seja, quando a tela for focada. 
    // O useEffect só atualizava a lista quando a tela era carregada pela primeira vez.
    useFocusEffect(
        useCallback(() => {
            refreshList()
        }, [])
    );

    async function refreshList() {
        try {
            setLoading(true);

            const response = await fetch(`${API_URL}/people`);
            const data = await response.json();

            setPerson(data);
        }
        catch (error) {
            alert("Error fetching people. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <View style={styles.container}>
                {
                    loading ? (
                        <Loading />
                    ) : (
                        <>
                            <Search data={person} renderItem={({ item }) => (
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>{item.firstname} {item.lastname}</Text>
                                    <Text style={styles.text}>{item.email}</Text>
                                    <Text style={styles.text}>{item.phone}</Text>
                                    <View style={buttonStyles.buttonContainer}>
                                        <Button
                                            title="Delete Person" onPress={() => {
                                                Alert.alert("Delete Person", "Are you sure you want to delete this person?",
                                                    [{ text: "Cancel" },
                                                    {
                                                        text: "Delete", onPress: () => {
                                                            deletePerson(item.id).then(() => {
                                                                refreshList()
                                                            })
                                                        }
                                                    }])
                                            }}
                                            backgroundColor={"#f07d7d"} />
                                        <Button title="Edit Person" onPress={() => navigation.navigate('AddEdit', { person: item })} backgroundColor={"#b3b477"} />
                                    </View>
                                </View>
                            )} />
                            <View style={buttonStyles.buttonContainer}>
                                <View style={buttonStyles.containerAdd}>
                                    <Button title="Add Person" onPress={() => navigation.navigate('AddEdit')} backgroundColor={"#79b477"} />
                                </View>
                            </View>
                        </>
                    )
                }
            </View>
        </>
    );
}