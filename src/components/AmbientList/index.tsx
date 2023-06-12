import React from "react"
import * as S from "./style"
import { FlatList, TouchableHighlight, Text, StyleSheet } from "react-native"
//define a tipagem para a array de dados que será utilizada na flatlist
interface ListData {
    id: number,
    content: string
}
//array definida usando o ListData criado anteriormente
const listData: ListData[] = [
    {
        id: 1,
        content: 'Sala'
    },
    {
        id: 2,
        content: 'Quarto'
    },
    {
        id: 3,
        content: 'Cozinha'
    },
    {
        id: 4,
        content: 'Banheiro'
    },
    {
        id: 5,
        content: 'Sacada'
    }
]
export default function AmbientsList() {
    //função que recebe os dados da array, nesse caso a função recebe como parâmetro item que está sendo tipado de acordo com a ListData, para assim todo os dados terem a mesma tipagem definida previamente
    const renderItem = ({ item }: { item: ListData }) => (
        <S.ListButton>
            <S.ButtonText>{item.content}</S.ButtonText>
        </S.ListButton>
    )
    return (

        <FlatList
            style={styles.listStyle}
            horizontal={true}
            data={listData} /* recebe os dados da array criada anteriormente */
            keyExtractor={item => item.id.toString()}  /* extrai a key de cada item na array para melhor o desempenho */
            renderItem={renderItem} //recebe a const renderItem com todas as propriedades definidas para redenrizar em tela
        />
    )
}

const styles = StyleSheet.create({
    listStyle: {
        margin: 20,
    }
})