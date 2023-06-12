import React from "react"
import { StyleSheet, Text } from "react-native"
import * as S from "./style"
import fonts from "../../styles/fonts"
//define uma tipagem para o botão, onde uma recebe o título do botão e a outra uma props para verificar se o botão está ativo ou não
interface EnviromentButtonProps {
    title: string,
    active?: boolean
}
export default function EnviromentButton({
    title,
    active = false,
    ...rest
}: EnviromentButtonProps) {
    return (
        <S.ButtonList style={active && styles.activeButton}> {/* se estiver ativo, vai renderizar outro estilo junto */}
            <Text style={active && styles.activeButtonText}>
                {title} {/* titulo do botão, adicionado via props */}
            </Text>
        </S.ButtonList>
    )
}
const styles = StyleSheet.create({
    activeButton: {
        backgroundColor: '#DAF2E4'
    },
    activeButtonText: {
        color: '#2B7A4B',
        fontFamily: fonts.heading
    }
})