import React, {useState} from "react"
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from "react-native"
import ResultImc from './ResutImc/index'
import styles from "./style"

export default function Form() {

    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [erro, setErro] = useState(null)
    const [lista, setLista] = useState([])

    const imcCalculator = () => {
        let heightFormat = altura.replace(",",".")
        let totalImc = (peso / (heightFormat * heightFormat)).toFixed(2)//toFixed controla as casas decimais
        setLista ((arr) => [...arr, {id: new Date().getTime(), imc:totalImc }])
        setImc(totalImc)
    }

    const verificaImc = () => {
        if(imc == null) {
            Vibration.vibrate();
            setErro("Campo obrigatorio*")
        }
    }

    const validationImc = () => {
        if(peso != null && altura != null) {
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular novamente")
            setErro(null)
            return
        }
        else {
            verificaImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e altura")
        }

    }

    return (
        
        <View style ={styles.formContext}>
            {imc == null ?  // : = a senao
            <Pressable onPress={Keyboard.dismiss} style ={styles.form}>
                <Text style ={styles.formLabel}>Altura</Text>
                <Text style = {styles.errorMensage}>{erro}</Text>
                <TextInput  style ={styles.formInput} onChangeText={setAltura} value={altura} placeholder="Ex. 1.75" keyboardType="numeric">

                </TextInput>
                <Text style ={styles.formLabel}>Peso</Text>
                <Text style = {styles.errorMensage}>{erro}</Text>
                <TextInput  style ={styles.formInput} onChangeText={setPeso} value={peso} placeholder="Ex. 75.365" keyboardType="numeric">

                </TextInput>

                <TouchableOpacity  style ={styles.button}  onPress={() => {validationImc()}}>
                    <Text  style ={styles.TextButton} >{textButton}</Text>
                </TouchableOpacity>

            </Pressable>
            : 
            <View style = {styles.exhibition}>
                <ResultImc messageResultImc={messageImc} resultImc={imc}></ResultImc>
                <TouchableOpacity  style ={styles.button}  onPress={() => {validationImc()}}>
                    <Text  style ={styles.TextButton} >{textButton}</Text>
                </TouchableOpacity>
            </View>
            }
            <FlatList showsVerticalScrollIndicator = {false} style = {styles.listaImc} data = {lista.reverse()} renderItem={({item}) => {
                return (
                    <Text style = {styles.resultImcItem}>
                        <Text style = {styles.textResultItem}>Resultado do IMC = </Text>
                        {item.imc}
                    </Text>
                )
            }} keyExtractor={(item) => {
                item.id
            }}>
            </FlatList>


        </View>
    );
}