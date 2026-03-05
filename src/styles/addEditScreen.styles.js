import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffefd1d3",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 100,
        textAlign: "center",
    },
    text: {
        fontSize: 14,
        color: "#666",
        margin: 10,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#fcfaf4",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 15,
        margin: 10,
        marginTop: 40,
        height: 45,
    },
});

export default styles;