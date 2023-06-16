import React from 'react'
import { StyleSheet } from 'react-native'
import * as S from "./style"
import LottieView from "lottie-react-native"
import loadAnimation from "../../assets/load.json"

export const LoadComponent = () => {
    return (
        <S.Container>
            <LottieView
                style={styles.animationStyle}
                source={loadAnimation}
                autoPlay
                loop
            />
        </S.Container>
    )
}

const styles = StyleSheet.create({
    animationStyle: {
        backgroundColor: 'transparent',
        width: 200,
        height: 200,
    }
})