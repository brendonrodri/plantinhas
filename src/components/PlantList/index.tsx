import React, { useState, useEffect } from "react"
import { FlatList } from "react-native"
import server from "../../services/server.json"
import PlantCardPrimary from "../PlantCardPrimary"
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
interface PlantsDataProps {
    plants: PlantsProps[]
}
export default function PlantList() {
    const [plants, setPlants] = useState<PlantsProps[]>([])
    const jsonData = JSON.stringify(server) as string;
    const paserdData = JSON.parse(jsonData) as PlantsDataProps;
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