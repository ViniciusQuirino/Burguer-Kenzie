import React from 'react'
import StyledHeader from './stylesHeader';
import { useState } from 'react';

function Header({ dados, setDadosFiltrados }) {
    const [input, setInput] = useState('')
    function pegarValor(e) {
        e.preventDefault()


        const result = dados.filter(elem => {

            const tratado = elem.name.toLowerCase()
            return tratado.includes(input.toLowerCase())
        })
        setDadosFiltrados(result)
    }


    return (
        <StyledHeader>
            <section>
                <p>Burguer Kenzie</p>
                <form className="divInput" onSubmit={(event) => pegarValor(event)}>

                    <input type="text" placeholder="Digitar Pesquisa" onChange={(event) => setInput(event.target.value)} />
                    <button type="submit">Pesquisar</button>

                </form>
            </section>
        </StyledHeader>
    )
}

export default Header;