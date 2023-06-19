import styled from "styled-components/native"
import { getBottomSpace } from "react-native-iphone-x-helper"
import fonts from "../../styles/fonts"

export const Container = styled.ScrollView`
    display: flex;
    background-color: white;
`
export const PlantInfo = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 35px;
    background-color: #F0F0F0;
    
`
export const PlantName = styled.Text`
    font-family: ${fonts.heading};
    font-size: 23px;
    color: #52665A;
`
export const PlantAbout = styled.Text`
    text-align: center;
    font-family: ${fonts.text};
    color: #52665A;
    font-size: 17px;
    margin-top: 10px;
`
export const ControllerContainer = styled.View`
    display: flex;
    height: 50%;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
    padding: 20px;
    padding-bottom: ${getBottomSpace() || 20} ;
`
export const ContainerTips = styled.View`
    padding: 20px 30px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #EBF6FF;
    border-radius: 20px;
    position: relative;
    bottom: 60px;
`
export const Image = styled.Image`
    width: 56px;
    height: 56px;
`
export const TipText = styled.Text`
    width: 75%;
    margin-left: 10px;
    font-family: ${fonts.text};
    color: #3D7199;
    font-size: 14px;
    text-align: justify;
`
export const AlertLabel = styled.Text`
    text-align: center;
    color: #3D7199;
    padding-bottom: 10px;
`
export const DateTimePicker = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    padding: 40px 0;
    color: #3D7199;
    font-size: 20px;
    font-family: ${fonts.text};
`
export const DateTimePickerTitle = styled.Text``