import styled from "styled-components/native"
import fonts from "../../styles/fonts"

export const Button = styled.TouchableOpacity`
    background-color: #32b768;
    width: 60%;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
`
export const ButtonText = styled.Text`
    color: #fefefe;
    font-weight: 600;
    font-family: ${fonts.heading};
    font-size: 16px;
`