import { useState } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Pricing from './sections/Pricing'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <main className='overflow-hidden'>
        <Header/>
        <Hero/>
        <Features/>
        <Pricing/>
      </main>
    
     
    
  )
}

export default App
