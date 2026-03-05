import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/addEditScreen.styles.js';
import buttonStyles from '../styles/button.styles.js';
import Button from '../components/Button.js';
import addPerson from '../services/add.js';
import editPerson from '../services/edit.js';

export default function AddEditScreen({ navigation, route }) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');

    const person = route.params?.person;

    const handleAdd = () => {
        if(!firstname || !lastname || !email) {
            alert('Please fill all fields of the form');
            return;
        }
        addPerson({ firstname, lastname, email });
        navigation.goBack();
    };

    const handleEdit = () => {
        editPerson(person.id, { firstname, lastname, email });
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{person ? 'Edit Person' : 'Add Person'}</Text>
            <TextInput style={styles.input} placeholder="First Name" value={firstname} onChangeText={setFirstname} />
            <TextInput style={styles.input} placeholder="Last Name" value={lastname} onChangeText={setLastname} />
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <View style={buttonStyles.buttonContainer}>
                <Button title={person ? 'Save Person' : 'Add Person'} onPress={person ? handleEdit : handleAdd} backgroundColor={"#79b477"} />
                <Button title="Close Form" onPress={() => navigation.goBack()} backgroundColor={"#f07d7d"} />
            </View>
        </View>
    );
}