//componente responsável pela página de identificação do usuário
import React, { useContext } from 'react'
import { KeyboardAvoidingView, View } from 'react-native'
import * as S from "./style"
import { ButtonComponent } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { Contexto } from '../../services/context'
export default function ConfirmationComponent() {
    const navigation = useNavigation<any>()
    const { userName } = useContext(Contexto)
    return (
        <KeyboardAvoidingView behavior='padding'>
            <S.Container>
                <View style={{ height: '35%', marginTop: '6%' }}>
                    <S.Emoji>
                        😄
                    </S.Emoji>
                    <S.ContainerTitle>
                        Prontinho, {userName}
                    </S.ContainerTitle>
                    <S.ContainerSubTitle>
                        Agora vamos começar a cuidar das suas plantinhas com muito cuidado
                    </S.ContainerSubTitle>
                </View>
                <ButtonComponent title='Continuar' onPress={() => navigation.navigate('homepage')} />
            </S.Container>
        </KeyboardAvoidingView>
    )
}
