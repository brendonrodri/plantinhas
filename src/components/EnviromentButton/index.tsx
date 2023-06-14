import React from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import fonts from "../../styles/fonts";
import * as S from "./style"
interface EnviromentButtonProps extends TouchableOpacityProps {
    title: string;
    active?: boolean;
}
const EnviromentButton = ({ title, active = false, ...rest }: EnviromentButtonProps) => {
    return (
        <S.ButtonList style={active && styles.activeButton} {...rest}>
            <S.ButtonText style={active && styles.activeButton}>{title}</S.ButtonText>
        </S.ButtonList>
    );
};
export default EnviromentButton;
const styles = StyleSheet.create({
    activeButton: {
        backgroundColor: '#DAF2E4',
        color: '#2B7A4B',
        fontFamily: fonts.heading
    }
})