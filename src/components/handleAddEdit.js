import { Alert } from "react-native";
import { addPerson, editPerson } from '../servers/personCrud.js';

const handleAddEdit = ({ firstname, lastname, email, phone, route, navigation }) => {
    const person = route.params?.person;

    //deixo como arrow function para não ser executada automaticamente 
    //quando handleAddEdit for chamado, apenas se os campos estiverem vazios.
    
    const AdviseNullFields = () => Alert.alert("Error", "Please fill in all fields to proceed.", [{ text: "OK" }]);

    person ?
        Alert.alert("Edit Person", `Value of the fields will be updated to: \n\nFirst Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}\nPhone: ${phone}`,
            [{ text: "Cancel" },
            {
                text: "Save", onPress: () => {
                    editPerson(person.id, { firstname, lastname, email, phone });
                    navigation.navigate("Home");
                }
            }])
        : (!firstname || !lastname || !email || !phone) ? AdviseNullFields()
            : Alert.alert("Add Person", `Value of the fields will be added to: \n\nFirst Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}\nPhone: ${phone}`,
                [{ text: "Cancel" },
                {
                    text: "Save", onPress: () => {
                        addPerson({ firstname, lastname, email, phone });
                        navigation.navigate("Home");
                    }
                }])
}

export default handleAddEdit;