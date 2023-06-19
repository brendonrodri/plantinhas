//componente responsável pela página de identificação do usuário
import React, { useCallback, useState, useEffect, useContext } from 'react'
import { useNavigation } from '@react-navigation/core'//importa o useNavigation para importar as rotas
import { KeyboardAvoidingView, View, TouchableWithoutFeedback, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as S from "./style"
import { ButtonComponent } from '../../components/Button'
import { Keyboard } from 'react-native'
import { Contexto } from '../../services/context'
export default function UserIndentifyComponent() {
    const [input, setInput] = useState('')
    const [isFocuos, setIsFocuos] = useState(false)
    const [isBlur, setIsBlur] = useState(true)
    const { setUserName } = useContext(Contexto)
    const setName = useCallback(() => { //useEffect adicionado para resolver o erro da função só ser chamado 
        setUserName(input)
    }, [input])
    //usa o hook para guardar a função navigate em um const, o que permite chamar a mesma no return
    //O hook carega a função que seta o state userName e tem como dependência o o state input, onde é armazenado a entrada do usuário.
    const navigation = useNavigation<any>();
    //função de trocar de rota, possui uma condição que não deixa a rota ser trocada se o input estiver vazio
    //possui também um else para indicar que se o input estiver preenchido, salva o nome do usuáiro no storage do aparelho e direciona o usuário para a rota seguinte. possui um cacth para tratar possíveis erros
    const handleRoute = () => {
        //condição 
        if (!input) {
            return Alert.alert('Por favor, nos informe seu nome') //mostra um alerta em tela para o usuário indicando que ele deve inserir um texto 
        } else {
            AsyncStorage.setItem('@planinhas:username', input) // Armazena o nome do usuário no AsyncStorage
                .then(() => {
                    navigation.navigate('confirmation'); //direciona o usuário para a seguinte roa
                })
                .catch((error) => {
                    console.log('Erro ao armazenar o nome do usuário:', error);
                });
        }
    }
    return (
        <KeyboardAvoidingView behavior='padding'>
            <TouchableWithoutFeedback onPress={(Keyboard.dismiss)}>
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
                        onBlur={() => {
                            setIsBlur(false)
                        }}
                        onFocus={() => {
                            setIsFocuos(true)
                        }}
                        value={input}
                        style={isFocuos === true ? { borderBottomColor: '#32b768' } : { borderBottomColor: 'black' }}
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
