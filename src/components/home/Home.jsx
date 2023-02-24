import React from 'react'
import Hero from '../hero/Hero'


export default function Home({movies}) {
  return (
    <Hero clasname="Home" movies={movies}/>
  )
}
