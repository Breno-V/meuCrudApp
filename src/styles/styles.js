import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffefd1d3",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        flex: 1,
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 60,
    },
    text: {
        textAlign: "center",
    },
    textContainer: {
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        marginTop: 20,
        backgroundColor: "#50464636",
        padding: 15,
        borderRadius: 10,
    },
    listContainer: {
        width: '90%', 
        maxHeight: '60%',
        padding: 20,
        margin: 20,
        marginBottom: 50,
        gap: 20,
        justifyContent: "space-evenly",
        flexDirection: 'row',
        backgroundColor: "#bfaeab",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default styles;