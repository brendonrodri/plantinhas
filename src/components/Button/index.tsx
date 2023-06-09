import React from 'react'
import { Button, ButtonText } from './style'
import { TouchableOpacityProps } from 'react-native'

//propriedade do typescript responsável por setar as props e definar o tipo de dado que será recebido
interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export const ButtonComponent = ({ title, ...rest }: ButtonProps) => {
    return (
        <Button
            activeOpacity={0.7}
            {...rest}
        >
            <ButtonText>
                {title}
            </ButtonText>
        </Button>
    )
}