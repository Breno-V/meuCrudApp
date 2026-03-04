import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/addEditScreen.styles.js';
import buttonStyles from '../styles/button.styles.js';
import Button from '../components/Button.js';
import addPerson from '../services/add.js';

export default function AddEditScreen({ navigation }) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');

    const handleAdd = () => {
        addPerson({ firstname, lastname, email });
        navigation.goBack();
    };

    return (
        <View>
            <Text style={styles.title}>Add Person</Text>
            <Text style={styles.text}> Add a new person to the list </Text>
            <Text style={{ margin: 10 }}> Add the firstname of the new Person:</Text>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstname}
                onChangeText={text => setFirstname(text)}
            />
            <Text style={{ margin: 10 }}> Add the lastname of the new Person:</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Last Name" 
                value={lastname}
                onChangeText={text => setLastname(text)}
            />
            <Text style={{ margin: 10 }}> Add the email of the new Person:</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Email" 
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <View style={buttonStyles.buttonContainer}>
                <Button title="Add" onPress={handleAdd} backgroundColor={"#79b477"} />
                <Button title="Close" onPress={() => navigation.goBack()} backgroundColor={"#f07d7d"} />
            </View>
        </View>
    );
}