import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WelcomeContainer from '../Pages/Welcome/Welcome'
import UserIndentifyComponent from '../Pages/userIndentificationPage'
import ConfirmationComponent from '../Pages/ConfirmationPage'

export const stackRoutes = createNativeStackNavigator()

const AppRoutes: React.FC = () => {
    return (
        <stackRoutes.Navigator screenOptions={{ headerShown: false }}>
            <stackRoutes.Screen name='welcome' component={WelcomeContainer} />
            <stackRoutes.Screen name='userIndetification' component={UserIndentifyComponent} />
            <stackRoutes.Screen name="confirmation" component={ConfirmationComponent} />
        </stackRoutes.Navigator>
    )
}
export default AppRoutes;