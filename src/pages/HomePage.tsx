import { Hero } from '@/components/Hero'
import { Navigation } from '@/components/Navigation'
import { WavyText } from '@/components/WavyText'
import React from 'react'

export const HomePage: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <WavyText />
    </>
  )
}
