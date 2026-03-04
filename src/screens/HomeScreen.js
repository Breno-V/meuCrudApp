import {View, Text, FlatList} from 'react-native';
import {useEffect, useState} from 'react';
import Button from '../components/Button';
import styles from '../styles/styles';

export default function HomeScreen() {
    const [person, setPerson] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/people')
        .then((response) => response.json())
        .then((data) => setPerson(data))
        .catch((error) => console.error(error));
    }, []);

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
                    </View>
                )}
            />
        </View>
    );      
}