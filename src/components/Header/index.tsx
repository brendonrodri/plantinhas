import React, { useContext } from 'react'
import { View } from 'react-native'
import * as S from "./style"
import Avatar from "../../assets/profile.png"
import { SafeAreaView } from 'react-native-safe-area-context'
import { Contexto } from '../../services/context'
export default function HeaderComponent() {
    const { userName } = useContext(Contexto)
    return (
        <SafeAreaView>
            <S.Container>
                <View>
                    <S.TextName>
                        Olá,
                    </S.TextName>
                    <S.TextHello>
                        {userName}
                    </S.TextHello>
                </View>
                <S.ProfileImage source={Avatar} />
            </S.Container>
        </SafeAreaView>
    )
}