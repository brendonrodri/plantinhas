import React, { useState, useEffect, useContext } from "react"
import { FlatList, StyleSheet } from "react-native"
import EnviromentButton from "../EnviromentButton"
import server from '../../services/server.json'
import { Contexto } from "../../services/context"
//define a tipagem do state que vai receber a api
interface EnviromentProps {
    key: string,
    title: string,
}
//atribui a mesma tipagem do state ao conteúdo do json
interface ServerData {
    plants_environments: EnviromentProps[]
}
export default function AmbientsList() {
    const [data, setData] = useState<EnviromentProps[]>([])
    const [environmentActive, setEnvironmentActive] = useState('all')
    const { plants, setFilteredPlants } = useContext(Contexto)
    // essa função tem como objetivo por parâmetro receber a key relacionada ao botão
    const handleEnvironment = (environment: string) => {
        //nessa linha, estou passando o valor da key para um estado
        //para ser informado ao botão qual elemento ele deve modificar de acordo com a chave
        setEnvironmentActive(environment)
        //aqui colocamos uma condição para caso o valor da key seja 'all', retorna o valor incial, que é o próprios plants
        if (environment === 'all') {
            return setFilteredPlants(plants)
        }
        //uma filtragem está sendo feita na api de plantas para retornar os itens de acordo com a key informada
        //a key é o ambiente em que a planta vive, então por exemplo, se eu informar q a minha key é quartos, só vai mostrar as plantas q contém esse valor no seu objeto.
        const filter = plants.filter((plants: any) => {
            return plants.environments.includes(environment)
        })
        //altera o valor do estado e quais itens devem ser mostrado na lista de plantas
        setFilteredPlants(filter)
    }
    //função que recebe os dados da array, nesse caso a função recebe como parâmetro item que está sendo tipado de acordo com a ListData, para assim todo os dados terem a mesma tipagem definida previamente
    const renderItem = ({ item }: { item: EnviromentProps }) => (
        <EnviromentButton title={item.title} active={item.key === environmentActive} onPress={() => {
            handleEnvironment(item.key)
        }} />
    )
    useEffect(() => {
        async function getData() {
            const jsonData = JSON.stringify(server) as string; //converte o json para string
            const parsedData = JSON.parse(jsonData) as ServerData; //atribui a tipagem definida para o json enquanto converte ele
            setData(parsedData.plants_environments); //atribui ao estado o valor do json
        }
        getData(),
            handleEnvironment('all')
    }, [])
    //impede que a lista seja exibida vazia, pois um valor só é atribuido a ela a partir do click no botão
    useEffect(() => {
        setTimeout(() => {
            setFilteredPlants(plants)
        }, 800)

    }, [plants])
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
    }
})