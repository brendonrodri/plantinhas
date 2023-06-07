import styled from 'styled-components/native'
import fonts from '../../styles/fonts'
import { Dimensions } from 'react-native'

export const Container = styled.SafeAreaView`
    display: flex;
    height: 650px;
    align-items: center;
    justify-content: space-around;
`
export const TextTitle = styled.Text`
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    font-family: ${fonts.heading};
    line-height: 34px;
    color: #52665A;
`
export const TextParagraph = styled.Text`
    text-align: center;
    font-size: 18px;
    font-family: ${fonts.text};
    padding: 0 20px;

`
export const Image = styled.Image`
    height: ${Dimensions.get('window').width * 0.7};
`
export const Button = styled.TouchableOpacity`
    background-color: #32b768;
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
`
export const ButtonText = styled.Text`
    color: #fefefe;
`
