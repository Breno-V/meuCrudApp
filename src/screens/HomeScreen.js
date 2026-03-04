import { View, Text, FlatList } from 'react-native';
import { useState } from 'react';
import Button from '../components/Button';
import styles from '../styles/styles';
import buttonStyles from '../styles/button.styles';
import deletePerson from '../services/delete.js';

export default function HomeScreen({navigation}) {
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
            <FlatList
                data={person}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.firstname} {item.lastname}</Text>
                        <Text>{item.email}</Text>
                        <Button title="Delete Person" onPress={() => deletePerson(item.id)} backgroundColor={"#f07d7d"} />
                    </View>
                )}
            />
            <View style={buttonStyles.buttonContainer}>
                <View>
                    <Button title="Add and/or Edit Person" onPress={() => navigation.navigate('AddEdit')} backgroundColor={"#79b477"} />
                </View>
            </View>
        </View>
    );
}