import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 90%;
    margin-top: 5%;
`
export const ContainerTitle = styled.Text`
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    color: #52665A;
    text-align: center;
    margin-top: 5%;
`
export const ContainerInput = styled.TextInput`
    border-bottom-width: 1px;
    border-color: #5C6660;
    color: #52665A;
    width: 70%;
    font-size: 18px;
    text-align: center;
    margin-top: 50px; 
    padding: 10px;
`
export const Emoji = styled.Text`
    font-size: 35px;
    text-align: center;
`