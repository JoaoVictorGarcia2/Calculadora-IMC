import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    formContext: {
        flex: 1,
        bottom:0,
        backgroundColor: "#fff",
        alignItems: 'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:30,
        marginTop:30,
    },
    form: {
        width: '100%',
        marginTop: 30,
        paddingTop: 20,
        padding: 10,
    },
    formLabel: {
        color: "black",
        fontSize:18,
        paddingLeft: 20,

    },
    formInput: {
        width: '100%',
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin: 12,
        paddingLeft:10,
    },
    TextButton: {
        fontSize: 20,
        color: "white",
    },
    button: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: "red",
        paddingTop: 14,
        paddingBottom: 12,
        marginLeft: 12,
        margin: 30,
    },
    errorMensage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft:20,
    },
    exhibition: {
        width: "100%",
        height: "100%",

    },
    listaImc: {
        marginTop: 20,
    },
    resultImcItem: {
        fontSize: 26,
        color: "red",
        height: 50,
        width: "100%",
        paddingRight: 20,
    },
    textResultItem: {
        fontSize: 16,
        color: "red",
    }
});

export default styles