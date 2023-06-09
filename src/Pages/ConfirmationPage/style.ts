import styled from 'styled-components/native'
import fonts from '../../styles/fonts'

export const Container = styled.SafeAreaView`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 85%;
    margin-top: 5%;
`
export const ContainerTitle = styled.Text`
    font-family: ${fonts.heading};
    font-size: 26px;
    font-weight: 600;
    line-height: 32px;
    color: #52665A;
    text-align: center;
    margin-top: 5%;
`
export const ContainerSubTitle = styled.Text`
    color: #5C6660;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    font-family: ${fonts.text};
    padding: 0 20px;
    margin-top: 20px;
`
export const ContainerInput = styled.TextInput`
    border-bottom-width: 1px;
    border-color: #5C6660;
    color: #52665A;
    width: 75%;
    font-size: 18px;
    text-align: center;
    margin-top: 50px; 
    padding: 10px;
`
export const Emoji = styled.Text`
    font-size: 70px;
    text-align: center;
`