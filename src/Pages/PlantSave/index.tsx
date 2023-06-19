import React, { useState, useContext, useEffect } from "react"
import { useRoute } from "@react-navigation/native"
import DateTimePicker, { Event } from "@react-native-community/datetimepicker"
import { isBefore, format } from "date-fns"
import * as S from "./style"
import { SvgFromUri } from "react-native-svg"
import Waterdrop from "../../assets/waterdrop.png"
import { ButtonComponent } from "../../components/Button"
import { Alert, Platform } from "react-native"

interface Params {
    plant: {
        id: string,
        name: string,
        about: string,
        water_tips: string,
        photo: string,
        environments: [string],
        frequency: {
            times: number,
            repeat_every: string
        }
    }

}

/* interface Params {
    id: string
} */
export default function PlantSaveComponent() {
    const [selectedDateTime, setSelectedDateTime] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios')
    const route = useRoute()
    const { plant } = route.params as Params
    const handleChangeTime = (event: Event, dateTime: Date | undefined) => {
        if (Platform.OS === 'android') {
            setShowDatePicker(prevState => !prevState)
        }
        if (dateTime && isBefore(dateTime, new Date())) {
            setSelectedDateTime(new Date())
            return Alert.alert('Escolha uma hora no futuro')
        }
        if (dateTime) {
            setSelectedDateTime(dateTime)
        }
    }
    const handleOpenDateTimePickerForAndroid = () => {
        setShowDatePicker(prevState => !prevState)
    }
    return (
        <S.Container>
            <S.PlantInfo>
                <SvgFromUri
                    uri={plant.photo}
                    width={150}
                    height={150}
                />
                <S.PlantName>
                    {plant.name}
                </S.PlantName>
                <S.PlantAbout>
                    {plant.about}
                </S.PlantAbout>
            </S.PlantInfo>
            <S.ControllerContainer>
                <S.ContainerTips>
                    <S.Image
                        source={Waterdrop}
                        alt="gota dágua"
                    />
                    <S.TipText>
                        {plant.water_tips}
                    </S.TipText>
                </S.ContainerTips>
                <S.AlertLabel>
                    Escolha o melhor horário para ser lembrado:
                </S.AlertLabel>
                {showDatePicker &&
                    <DateTimePicker
                        value={selectedDateTime}
                        mode="time"
                        display="spinner"
                        onChange={() => {
                            handleChangeTime
                        }}
                    />
                }
                {
                    Platform.OS === 'android' && (
                        <S.DateTimePicker onPress={() => {
                            handleOpenDateTimePickerForAndroid
                        }}>
                            <S.DateTimePickerTitle>
                                {` Mudar Horário${format(selectedDateTime, 'HH:mm')}`}
                            </S.DateTimePickerTitle>
                        </S.DateTimePicker>
                    )
                }
                <ButtonComponent title="Cadastrar Planta" style={{ width: '90%' }} />

            </S.ControllerContainer>
        </S.Container>

    )
}