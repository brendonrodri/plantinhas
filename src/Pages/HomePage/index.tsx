import React, { useEffect, useState } from 'react'
/* import axios from 'axios' */
import * as S from "./style"
import HeaderComponent from '../../components/Header'
import AmbientsList from '../../components/AmbientList'
import PlantList from '../../components/PlantList'
import { LoadComponent } from '../../components/Load/Load'
export default function HomePageComponent() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = React.useState({})
    useEffect(() => {
        /*  const getApi = async () => {
             const { data } = await axios.get('plants')
             setData(data)
         } */
        setTimeout(() => {
            setLoading(false)
        }, 2800)
        /*  getApi() */
    })

    if (loading) {
        return <LoadComponent />
    }



    return (
        <>
            <HeaderComponent />
            <S.TextContainer>
                <S.StrongText> Em qual ambiente</S.StrongText>
                <S.NormalText> você quer colocar sua planta?</S.NormalText>
            </S.TextContainer>
            <AmbientsList />
            <PlantList />
        </>
    )
}