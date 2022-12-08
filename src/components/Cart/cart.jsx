import React from 'react'
import CartContainer from './stylesCart'
import { BsTrash } from 'react-icons/bs'


const Cart = ({ cart, setCart }) => {
    const result = cart.reduce((acc, atual) => acc + (atual.price * atual.qnt), 0)


    function remover(obj) {
        const resultado = cart.filter((elem) => elem !== obj)
        setCart(resultado)
    }

    function quantidade(event) {
        const id = event.target.id

        const result = cart.map(elem => {
            if (elem.id == id) {
                if (event.target.innerText == '+') {
                    return {
                        ...elem,
                        qnt: elem.qnt + 1
                    }
                }
                else if (event.target.innerText == '-' && elem.qnt > 1) {
                    return {
                        ...elem,
                        qnt: elem.qnt - 1
                    }
                } else if (elem.qnt == 1) {
                    return {
                        ...elem,
                        qnt: 1
                    }
                }
            } else {
                return elem
            }
        })
        setCart(result)
    }




    return (
        <CartContainer>
            <div className="superior">
                <h1>Carrinho de Compra</h1>
            </div>

            <ul>
                {cart.map((elem, index) => (
                    <li key={index}>
                        <div>
                            <img src={elem.img} alt="" />
                            <div className="flex">
                                <h3>{elem.name}</h3>
                                <p>{elem.category}</p>
                            </div>
                        </div>
                        <div className="divDireita">
                            <BsTrash className="trash" onClick={() => remover(elem)} />
                            <div className="qnt">
                                <button id={elem.id} onClick={(event) => quantidade(event)}>+</button>
                                <p>{elem.qnt}</p>
                                <button id={elem.id} onClick={(event) => quantidade(event)}>-</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="inferior">
                <p>Total</p>
                <span>R$ {result},00</span>
            </div>

            <button onClick={() => setCart([])}>Remover todos</button>

        </CartContainer >
    )
}

export default Cart;