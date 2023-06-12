import React from 'react'
import { SvgFromUri } from "react-native-svg" //biblioteca para o uso das SVGS
import * as S from "./style"
//define a tipagem do botão
interface PropsPlant {
    data: {
        name: string;
        photo: string;
    }
}
export default function PlantCardPrimary({ data, ...rest }: PropsPlant) {
    return (
        <S.Card  {...rest}>
            <SvgFromUri uri={data.photo} width={75} height={75} />
            <S.CardTitle>
                {data.name}
            </S.CardTitle>
        </S.Card>
    )
}