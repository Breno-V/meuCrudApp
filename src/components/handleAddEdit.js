import { Alert } from "react-native";
import { addPerson, editPerson } from '../servers/personCrud.js';

const handleAddEdit = ({ firstname, lastname, email, phone, route, navigation }) => {
    const person = route.params?.person;

    //deixo como arrow function para não ser executada automaticamente 
    //quando handleAddEdit for chamado, apenas se os campos estiverem vazios.

    function AdviseNullField ({ firstname, lastname, email, phone }) {
        let emptyFields = [];
        
        if (!firstname?.trim()) emptyFields.push("First Name");
        if (!lastname?.trim()) emptyFields.push("Last Name");
        if (!email?.trim()) emptyFields.push("Email");
        if (!phone?.trim()) emptyFields.push("Phone");

        if (emptyFields.length > 0) {
            Alert.alert("Error", ` The Following fields are empty:\n\n${emptyFields.join("\n")}.\n\n Please fill them to proceed.`, [{ text: "OK" }]);
        }

        return emptyFields;
    };

    if(!person) {
        const emptyFields = AdviseNullField({ firstname, lastname, email, phone });
        if (emptyFields.length > 0) return;
    }

    person ?
        Alert.alert("Edit Person", `Value of the fields will be updated to: \n\nFirst Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}\nPhone: ${phone}`,
            [{ text: "Cancel" },
            {
                text: "Save", onPress: async () => {
                    await editPerson(person.id, { firstname, lastname, email, phone });
                    navigation.navigate("Home");
                }
            }])
        : 
        
        Alert.alert("Add Person", `Value of the fields will be added to: \n\nFirst Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}\nPhone: ${phone}`,
            [{ text: "Cancel" },
            {
                text: "Save", onPress: async () => {
                    await addPerson({ firstname, lastname, email, phone });
                    navigation.navigate("Home");
                }
            }])
}

export default handleAddEdit;