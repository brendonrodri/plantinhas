import React from 'react'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost" //importa as fontes diretamente do google usando a api de fonts do próprio expo
import Routes from './src/routes'
import ContextApi from './src/services/context'
export default function App() {
  const [fonts] = useFonts({
    Jost_400Regular, Jost_600SemiBold
  }) // importa as fontes e disponbiliza para todo o app, sem a necessidade de criar uma função como 'Font.Async'
  if (!fonts) {
    return
  }

  return (
    <ContextApi>
      <Routes />
    </ContextApi>
  )
}