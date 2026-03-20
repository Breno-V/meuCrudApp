import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        marginBottom: 10,
        marginTop: 25,
       
    },
    input: {
        backgroundColor: "#fff",
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        
    },
    listContainer: {
        width: '90%', 
        maxHeight: '70%',
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