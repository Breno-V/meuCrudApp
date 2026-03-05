import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: 120,
        height: 50,
        gap: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonContainer: {
        marginBottom: 40,
        marginTop: 20,
        gap: 20,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: 'row',
    },
});

export default buttonStyles;