//componente responsável pela página de identificação do usuário
import React, { useCallback, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'//importa o useNavigation para importar as rotas
import { KeyboardAvoidingView, View, TouchableWithoutFeedback } from 'react-native'
import * as S from "./style"
import { ButtonComponent } from '../../components/Button'
import { Keyboard } from 'react-native'
export default function UserIndentifyComponent() {
    const [input, setInput] = useState('')
    const [userName, setUserName] = useState('')
    const [isFocuos, setIsFocuos] = useState(false)
    const [isBlur, setIsBlur] = useState(false)

    const handleBlur = () => {
        setIsBlur(false)
    }
    const handleFocuos = () => {
        setIsFocuos(true)
    }

    const navigation = useNavigation<any>(); //usa o hook para guardar a função navigate em um const, o que permite chamar a mesma no return
    //useEffect adicionado para resolver o erro da função só ser chamado ao primeiro click.
    //O hook carega a função que seta o state userName e tem como dependência o o state input, onde é armazenado a entrada do usuário.
    const setName = useCallback(() => { //useEffect adicionado para resolver o erro da função só ser chamado 
        setUserName(input)
    }, [input])
    //função de trocar de rota, possui uma condição que não deixa a rota ser trocada se o input estiver vazio
    const handleRoute = () => {
        if (!input) {
            return
        } else {
            navigation.navigate('confirmation') //muda o endereço da rota
        }
    }
    return (
        <KeyboardAvoidingView behavior='padding'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <S.Container>
                    <View style={{ height: '35%', marginTop: '6%' }}>
                        <S.Emoji>
                            😄
                        </S.Emoji>
                        <S.ContainerTitle>
                            Como podemos {'\n'}chamar você?
                        </S.ContainerTitle>
                    </View>
                    <S.ContainerInput
                        placeholder='Digite seu nome aqui...'
                        onChangeText={setInput}
                        onBlur={handleBlur}
                        onFocus={handleFocuos}
                        value={input}
                        style={isFocuos && { borderColor: 'green' }}
                    />
                    <ButtonComponent title='Confirmar' onPress={() => {
                        setName(),
                            handleRoute()
                    }} />
                </S.Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
