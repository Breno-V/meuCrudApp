import { View, TextInput, FlatList } from "react-native";
import styles from "../styles/search.styles.js";
import { useState } from "react";

export default function Search({ data, renderItem }) {

    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const searchFilter = (text) => {
        if (text) {
            const newData = data.filter((item) => {
                const itemData = `${item.firstname.toUpperCase()} ${item.lastname.toUpperCase()} ${item.email.toUpperCase()} ${item.phone.toUpperCase()}`;
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearch(text);
        } else {
            setFilteredData(data);
            setSearch(text);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search by name, email or phone"
                value={search}
                onChangeText={searchFilter}
            />

            {
                search
                    ?
                    <View style={styles.listContainer}>
                        <FlatList
                            data={filteredData}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderItem}
                        />
                    </View>
                    : <View style={styles.listContainer}>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderItem}
                        />
                    </View>
            }
        </View>
    );
}