import React from 'react'
import { SafeAreaView, View } from "react-native"
import * as S from "./style"
import HeaderComponent from '../../components/Header'
import AmbientsList from '../../components/AmbientList'

export default function HomePageComponent() {
    return (
        <SafeAreaView>
            <HeaderComponent />
            <S.TextContainer>
                <S.StrongText> Em qual ambiente</S.StrongText>
                <S.NormalText> você quer colocar sua planta?</S.NormalText>
            </S.TextContainer>
            <AmbientsList />
        </SafeAreaView>
    )
}