import React from 'react'
import { View } from 'react-native'
import * as S from "./style"
import Avatar from "../../assets/profile.png"
import { SafeAreaView } from 'react-native-safe-area-context'


export default function HeaderComponent() {
    return (
        <SafeAreaView>
            <S.Container>
                <View>
                    <S.TextName>
                        Olá,
                    </S.TextName>
                    <S.TextHello>
                        Brendon
                    </S.TextHello>
                </View>
                <S.ProfileImage source={Avatar} />
            </S.Container>
        </SafeAreaView>
    )
}