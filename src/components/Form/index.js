import React, { useState } from "react"
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import ResultImc from "./ResultImc";
import styles from "./style";
export default function Form() {
    const [heigth, setHeigth] = useState(null)
    const [weigth, setWeigth] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha os campos ")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setImc((weigth / (heigth * heigth)).toFixed(2))
    }
    function validationImc() {
        if (weigth != null && heigth != null) {
            imcCalculator()
            setHeigth(null)
            setWeigth(null)
            setMessageImc("Seu Imc é igual :")
            setTextButton("Calcular Novamente")
            return
        } else {
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha os campos ")
        }
    }
    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.textInput}
                    onChangeText={setHeigth}
                    value={heigth}
                    placeholder="Ex 1.75"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.textInput}
                    onChangeText={setWeigth}
                    value={weigth}
                    placeholder="Ex 75.365"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={validationImc}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
                {/* <Button onPress={validationImc} title="Calcular IMC" /> */}
            </View>
            <ResultImc MessageImc={messageImc} ResultImc={imc} />
        </View>
    )
}