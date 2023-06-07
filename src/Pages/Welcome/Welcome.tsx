import React from 'react'
import * as S from "./style"
import wateringimg from "../../assets/watering.png"
import { ButtonComponent } from '../../components/Button'
import { Feather } from "@expo/vector-icons"
import { StyleSheet } from 'react-native'
import fonts from '../../styles/fonts'

export default function WelcomeContainer() {
    return (
        <S.Container>
            <S.TextTitle>
                Gerencie{'\n'} suas plantas de {'\n'}forma fácil
            </S.TextTitle>
            <S.Image source={wateringimg} resizeMode='contain' />
            <S.TextParagraph>
                Não se esqueça de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </S.TextParagraph>
            <S.Button activeOpacity={0.7}>
                <S.ButtonText>
                    <Feather name={'chevron-right'} style={{ fontSize: 32, color: 'white' }} />
                </S.ButtonText>
            </S.Button>
        </S.Container>
    )
}
