import './App.css'
import './assets/styles/estilos.css'
import Header from './components/Header'
import SobreMi from './components/SobreMi'
import CV from './components/CV'
import Proyectos from './components/Proyectos'
import Certificados from './components/Certificados'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <main>
        <SobreMi/>
        <CV/>
        <Proyectos/>
        <Certificados/>
        <Contacto/>
        <Footer/>
      </main>
     
    </>
  )
}

export default App
