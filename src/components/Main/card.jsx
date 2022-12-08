import React from 'react'
import Container from './stylesCard'
import { ToastContainer, toast } from 'react-toastify'


const Card = ({ dados, cart, setCart, dadosFiltrados }) => {

    function addCart(event) {
        const id = event.target.id
        const result = cart.some(elem => elem.id == id)



        return (

            !result ?
                dados.map(elem => {
                    elem.id == id &&
                        setCart([...cart, {
                            id: elem.id,
                            name: elem.name,
                            category: elem.category,
                            price: parseFloat(elem.price.toFixed(1)),
                            img: elem.img,
                            qnt: 1
                        }])
                }) : toast.warn('Esse produto já se encontra dentro do carrinho!')


        )


    }

    return (
        <>
            {
                dadosFiltrados.length == 0 &&
                dados.map((elem, index) => (
                    <Container key={index}>
                        <img src={elem.img} alt="" />
                        <h3>{elem.name}</h3>
                        <span>{elem.category}</span>
                        <p>R$ {parseFloat(elem.price.toFixed(1))},00</p>
                        <button id={elem.id} onClick={(event) => addCart(event)}>Adicionar</button>
                    </Container>
                ))
            }

            {
                dadosFiltrados.length > 0 && (
                    dadosFiltrados.map((elem, index) => (
                        <Container key={index} >
                            <img src={elem.img} alt="" />
                            <h3>{elem.name}</h3>
                            <span>{elem.category}</span>
                            <p>R$ {parseFloat(elem.price.toFixed(1))},00</p>
                            <button id={elem.id} onClick={(event) => addCart(event)}>Adicionar</button>
                        </Container>
                    ))
                )
            }
        </>
    )
}

export default Card;


