import styled from 'styled-components/native'
import fonts from '../../styles/fonts'

export const Container = styled.View`
    width: 100%;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const TextHello = styled.Text`
    font-family: ${fonts.heading};
    font-size: 32px;
    color: #52665A;
`
export const TextName = styled.Text`
    font-family: ${fonts.text};
    font-size: 32px;
    color: #52665A;
`
export const ProfileImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`