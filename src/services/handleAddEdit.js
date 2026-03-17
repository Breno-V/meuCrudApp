import { Alert } from "react-native";
import { addPerson, editPerson } from '../services/personCrud.js';

const handleAddEdit = ({ firstname, lastname, email }) => {
    const person = route.params?.person;

    person ?
        Alert.alert("Edit Person", `Value of the fields will be updated to: \n\nFirst Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}`,
            [{ text: "Cancel" },
            {
                text: "Save", onPress: () => {
                    editPerson(person.id, { firstname, lastname, email });
                    navigation.navigate("Home");
                }
            }])
    : (algumacoisa) ?
    Alert.alert("Add Person", `Value of the fields will be added to: \n\nFirst Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}`,
        [{ text: "Cancel" },
        {
            text: "Save", onPress: () => {
                addPerson({ firstname, lastname, email });
                navigation.navigate("Home");
            }
        }])
    : fazernada
}