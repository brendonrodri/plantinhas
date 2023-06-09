//componente responsável pela página de identificação do usuário
import React, { useCallback, useState, useEffect } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import * as S from "./style"
import { ButtonComponent } from '../../components/Button'
export default function UserIndentifyComponent() {
    const [input, setInput] = useState('')
    const [userName, setUserName] = useState('')
    //useEffect adicionado para resolver o erro da função só ser chamado ao primeiro click.
    //O hook carega a função que seta o state userName e tem como dependência o o state input, onde é armazenado a entrada do usuário.
    const setName = useCallback(() => { //useEffect adicionado para resolver o erro da função só ser chamado 
        setUserName(input)
    }, [input])

    useEffect(() => {
        console.log(userName, 'click')
    }, [userName])
    return (
        <KeyboardAvoidingView behavior='padding'>
            <S.Container>
                <S.Emoji>
                    😄
                </S.Emoji>
                <S.ContainerTitle>
                    Como podemos {'\n'}chamar você?
                </S.ContainerTitle>
                <S.ContainerInput
                    placeholder='Digite seu nome aqui...'
                    autoFocus={true}
                    onChangeText={setInput}
                    value={input}
                />
                <ButtonComponent title='Confirmar' onPress={setName} />
            </S.Container>
        </KeyboardAvoidingView>
    )
}