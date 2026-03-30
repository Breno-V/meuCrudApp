import { View, TextInput, FlatList } from "react-native";
import styles from "../styles/search.styles.js";

export default function Search({search, setSearch}) {

    return (
         <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search by name, email or phone"
                value={search}
                onChangeText={setSearch}
            />
        </View>
    );
}