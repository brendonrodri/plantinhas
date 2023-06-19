import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, createContext, useEffect } from 'react'

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
export const Contexto = createContext<any>(undefined)
export default function ContextApi({ children }: any) {
    const [plants, setPlants] = useState<PlantsDataProps>()
    const [filteredPlants, setFilteredPlants] = useState<PlantsDataProps>()
    const [userName, setUserName] = useState<any>(AsyncStorage.getItem('@planinhas:name') || '')
    useEffect(() => console.log(userName), [userName])
    return (
        <Contexto.Provider value={{
            plants,
            setPlants,
            filteredPlants,
            setFilteredPlants,
            userName,
            setUserName
        }}>
            {children}
        </Contexto.Provider>
    )
}