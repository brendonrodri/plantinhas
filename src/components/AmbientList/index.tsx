import React, { useState, useEffect } from "react"
import { FlatList, StyleSheet } from "react-native"
import EnviromentButton from "../EnviromentButton"
import server from '../../services/server.json'
//define a tipagem do state que vai receber a api
interface EnviromentProps {
    key: string,
    title: string
}
//atribui a mesma tipagem do state ao conteúdo do json
interface ServerData {
    plants_environments: EnviromentProps[]
}
export default function AmbientsList() {
    const [data, setData] = useState<EnviromentProps[]>([])
    //função que recebe os dados da array, nesse caso a função recebe como parâmetro item que está sendo tipado de acordo com a ListData, para assim todo os dados terem a mesma tipagem definida previamente
    const renderItem = ({ item }: { item: EnviromentProps }) => (
        <EnviromentButton title={item.title} active />
    )
    useEffect(() => {
        async function getData() {
            const jsonData = JSON.stringify(server) as string; //converte o json para string
            const parsedData = JSON.parse(jsonData) as ServerData; //atribui a tipagem definida para o json enquanto converte ele
            setData(parsedData.plants_environments); //atribui ao estado o valor do json
        }
        getData()
    }, [])
    return (
        <FlatList
            style={styles.listStyle}
            horizontal={true} //define a lista como uma lista horizontal
            showsHorizontalScrollIndicator={false}
            data={data} /* recebe os dados  para serem exibidos em tela */
            keyExtractor={item => item.key}  /* extrai a key de cada item na array para melhor o desempenho */
            renderItem={renderItem} //recebe a const renderItem com todas as propriedades definidas para redenrizar em tela
        />
    )
}
const styles = StyleSheet.create({
    listStyle: {
        margin: 20,
        height: 70,
    },
    activeButton: {
        color: 'red'
    }
})