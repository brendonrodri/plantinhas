import React, { useState, useEffect } from "react"
import { FlatList } from "react-native"
import server from "../../services/server.json"
import PlantCardPrimary from "../PlantCardPrimary"
//define a tipagem do o state onde será guardado os valores vindos do json
interface PlantsProps {
    id: string,
    name: string,
    about: string,
    water_tips: string,
    photo: string,
    environments: [string],
    frequency: {
        times: number,
        repeat_every: string
    }
}
//define a mesma tipagem para o json
interface PlantsDataProps {
    plants: PlantsProps[]
}
export default function PlantList() {
    const [plants, setPlants] = useState<PlantsProps[]>([])
    const jsonData = JSON.stringify(server) as string; //converse o json para string
    const paserdData = JSON.parse(jsonData) as PlantsDataProps; //converte e atribui uma tipagem aos dados
    const ItemRender = ({ item }: { item: PlantsProps }) => (
        <PlantCardPrimary data={item} />
    )
    const getData = () => setPlants(paserdData.plants)
    useEffect(() => {
        getData()
    }, [])
    return (
        <FlatList
            data={plants}
            keyExtractor={item => item.id}
            renderItem={ItemRender}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            style={{ marginBottom: 20 }}
        />

    )
}