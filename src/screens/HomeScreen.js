import { View, Text, FlatList, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import styles from '../styles/styles';
import buttonStyles from '../styles/button.styles';
import deletePerson from '../services/delete.js';

export default function HomeScreen({ navigation }) {
    const [person, setPerson] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3000/people')
    //         .then((response) => response.json())
    //         .then((data) => setPerson(data))
    //         .catch((error) => console.error(error));
    // }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>People List</Text>
            <View style={styles.listContainer}>
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
                                                { text: "Delete", onPress: () => deletePerson(item.id) }])
                                        }}
                                        backgroundColor={"#f07d7d"} />
                                    <Button title="Edit Person" onPress={() => navigation.navigate('AddEdit', { person: item })} backgroundColor={"#b3b477"} />
                                </View>
                            </View>
                        </>
                    )}
                />
            </View>
            <View style={buttonStyles.buttonContainer}>
                <View>
                    <Button title="Add Person" onPress={() => navigation.navigate('AddEdit')} backgroundColor={"#79b477"} />
                </View>
            </View>
        </View>
    );
}