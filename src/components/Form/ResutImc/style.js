import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    resultImc: {
        flex: 1,
        marginTop: 20,
        paddingTop: 15,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    numberImc: {
        fontSize: 48,
        color: "red",
        fontWeight: "bold",
    },
    informacoes: {
        fontSize: 18,
        color: "red",
        fontWeight: "bold",
    },
    boxSharebutton: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },
    shared: {
        backgroundColor: "#29be26",
        borderRadius: 50,
        padding: 6,
    },
    sharedText: {
        color: "white",
        fontWeight: "bold",
        paddingHorizontal: 16,
    }
});

export default styles