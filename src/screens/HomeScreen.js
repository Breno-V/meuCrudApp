import { View, Text, Alert, FlatList } from 'react-native';
import { useState, useCallback, useEffect } from 'react';
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
    const [error, setError] = useState(false);
    const [search, setSearch] = useState("");
    // useFocusEffect serve para atualizar a lista toda vez que haver uma navegação entre telas, ou seja, quando a tela for focada. 

    useFocusEffect(
        useCallback(() => {
            refreshList()
        }, [])
    );

    async function refreshList() {
        try {
            setLoading(true);
            setError(false);

            const response = await fetch(`${API_URL}/people`);
            const data = await response.json();

            setPerson(data);
        }
        catch (error) {
            setError(true);
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const filteredData = search ?
        person.filter((item) => {
            const itemData = `${item.firstname} ${item.lastname} ${item.email} ${item.phone}`.toUpperCase();
            const textData = search.toUpperCase();
            return itemData.indexOf(textData) > -1;
        })
        :
        person;

    return (
        <View style={styles.container}>
            {
                loading ? (
                    <Loading />
                ) : error ? (
                    <View style={{ alignItems: 'center', padding: 20, margin: 20 }}>
                        <Text style={{ alignItems: 'center', margin: 10 }}>Erro ao carregar dados</Text>
                        <Text style={styles.errorMessage}> {error?.message || "Verifique sua conexão com a internet e tente novamente."} </Text>
                        <Button title="Tentar novamente" onPress={refreshList} backgroundColor={"#79b477"} />
                    </View>
                ) : (
                    <>
                        <Search search={search} setSearch={setSearch} />
                        <FlatList
                            data={filteredData}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <View style={styles.listContainer}>
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
                                </View>
                            )}
                        />
                        <View style={buttonStyles.buttonContainer}>
                            <View style={buttonStyles.containerAdd}>
                                <Button title="Add Person" onPress={() => navigation.navigate('AddEdit')} backgroundColor={"#79b477"} />
                            </View>
                        </View>
                    </>
                )
            }
        </View>
    );
}