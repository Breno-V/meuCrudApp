import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        width: 100,
        height: 50,
        gap: 10,
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