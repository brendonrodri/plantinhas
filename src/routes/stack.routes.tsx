import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack" //importa um função do native-stack para criar o provedor das rotas
import WelcomeContainer from '../Pages/Welcome/Welcome'
import UserIndentifyComponent from '../Pages/userIndentificationPage'
import ConfirmationComponent from '../Pages/ConfirmationPage'
import HomePageComponent from '../Pages/HomePage'
export const stackRoutes = createNativeStackNavigator() //cria o provedor das rotas
//componente responsável por criar as rotas. stackRoutes.Navigator o componente que encapsula as rotas.
//navitagor possui o screenOptions que carrega nele o headerShown com o valor false.
//isso permite que o app fique em tela cheia, com a header de navegação escondida
//stackRoutes.Screen é a rota, que será exibida na tela.
const AppRoutes: React.FC = () => {
    return (
        <stackRoutes.Navigator screenOptions={{ headerShown: false }}>
            <stackRoutes.Screen name='welcome' component={WelcomeContainer} />
            <stackRoutes.Screen name='userIndetification' component={UserIndentifyComponent} />
            <stackRoutes.Screen name="confirmation" component={ConfirmationComponent} />
            <stackRoutes.Screen name="homepage" component={HomePageComponent} />
        </stackRoutes.Navigator>
    )
}
export default AppRoutes;