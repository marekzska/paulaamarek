import { Hero } from '@/components/Hero'
import { Navigation } from '@/components/Navigation'
import { WavyText } from '@/components/WavyText'
import { OneWave } from '@/components/OneWave'
import React from 'react'

export const HomePage: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <WavyText text="We're getting married" emoji="❤︎" />
      <OneWave text="RSVP" emoji="☟" />
    </>
  )
}
