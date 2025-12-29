import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Resume from '@/components/sections/Resume'
import Photos from '@/components/sections/Photos'
import Contact from '@/components/sections/Contact'
import ClickSpark from '@/components/ClickSpark'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Photos />
      <Contact />
      <Footer />
      <ClickSpark />
    </main>
  )
}
