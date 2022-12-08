import { useEffect, useState } from 'react'
import Header from './components/Header/header'
import Reset from './global'
import Card from './components/Main/card'
import Cart from './components/Cart/cart'
import './App.css'
import api from './api.js'
import { ToastContainer, toast } from 'react-toastify'
import  'react-toastify/dist/ReactToastify.css' 


function App() {
  const [dados, setDados] = useState([])
  const [cart, setCart] = useState([])
  const [dadosFiltrados, setDadosFiltrados] = useState([])

  console.log(cart)

  useEffect(() => {
    api.get('')
      .then(resp => setDados(resp.data))
      .catch(err => console.error(err))
  }, [])


  return (
    <div className="App">
      <Reset />

      <Header
        dados={dados}
        setDadosFiltrados={setDadosFiltrados} />

      <div className="display">

        <main className="display">
          <ul className="ulCard">

            <Card
              dados={dados}
              cart={cart}
              setCart={setCart}
              dadosFiltrados={dadosFiltrados} />

          </ul>
          <Cart
            cart={cart}
            setCart={setCart} />
        </main>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default App
