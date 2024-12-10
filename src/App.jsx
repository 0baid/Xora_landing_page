import { useState } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import Testimonials from './sections/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <main className='overflow-hidden'>
        <Header/>
        <Hero/>
        <Features/>
        <Pricing/>
        <FAQ/>
        <Testimonials/>
      </main>
    
     
    
  )
}

export default App
