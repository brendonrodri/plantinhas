//componente responsável pela página de identificação do usuário
import React, { useCallback, useState, useEffect, useContext } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import * as S from "./style"
import { ButtonComponent } from '../../components/Button'
export default function ConfirmationComponent() {
    return (
        <KeyboardAvoidingView behavior='padding'>
            <S.Container>
                <View style={{ height: '35%', marginTop: '6%' }}>
                    <S.Emoji>
                        😄
                    </S.Emoji>
                    <S.ContainerTitle>
                        Prontinho
                    </S.ContainerTitle>
                    <S.ContainerSubTitle>
                        Agora vamos começar a cuidar das suas plantinhas com muito cuidado
                    </S.ContainerSubTitle>
                </View>
                <ButtonComponent title='Continuar' />
            </S.Container>
        </KeyboardAvoidingView>
    )
}
