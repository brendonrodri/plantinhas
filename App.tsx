import React, { useEffect, useState } from 'react'

import WelcomeContainer from './src/Pages/Welcome/Welcome'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost"
export default function App() {
  const [fonts] = useFonts({
    Jost_400Regular, Jost_600SemiBold
  })

  if (!fonts) {
    return null
  }
  return (
    <>
      <WelcomeContainer />
    </>
  )
}