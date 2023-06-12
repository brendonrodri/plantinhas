import React from 'react'
import * as S from "./style"
import HeaderComponent from '../../components/Header'
import AmbientsList from '../../components/AmbientList'
import PlantList from '../../components/PlantList'
export default function HomePageComponent() {

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