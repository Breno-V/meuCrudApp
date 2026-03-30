import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#ffefd1d3",
        alignItems: "center",
        justifyContent: "center",
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
    errorMessage: {
        alignItems: 'center', 
        margin: 10, 
        backgroundColor: '#a59f9f',
        borderWidth: 1,
        borderColor: '#f07d7d',
        textAlign: 'justify',
        elevation: 5,
        padding: 10,
        borderRadius: 5,
    },
    listContainer: {
        width: '90%', 
        padding: 20,
        margin: 20,
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