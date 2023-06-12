import styled from "styled-components/native"
import fonts from "../../styles/fonts"
export const Card = styled.TouchableOpacity`
    width: 148px;
    height: 154px;
    justify-content: center;
    align-items: center;
    background-color: #e7e4e4;
    border-radius: 18px;
    margin: 5px 20px;
`
export const CardTitle = styled.Text`
    font-family: ${fonts.heading};
    font-size: 16px;
    margin-top: 10px;
    color: #52665A;
`