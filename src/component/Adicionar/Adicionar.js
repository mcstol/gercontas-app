import React, { useState } from 'react'
import './Adicionar.css'


export const Add = () => {

    const [tipo, setTipo ] = useState('')
    const [valor, setValor ] = useState('')

    const handleTipo = (event) => {
        setTipo( event.target.value)
    }

    const handleValor =(event) =>{
        setValor(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        const data = {
            'type': tipo,
            'value': valor
        }
        console.log(data)
    }

    return(
        <section>
            <h1>Adicionar Conta</h1>
            <form onSubmit={handleSubmit}>
                <div className='formulario'>
                    <div className='tipo'>
                        <h2>Tipo</h2>
                        <input
                        type= 'text'
                        name='text'
                        placeholder='Digite o tipo da conta'
                        value={tipo}
                        onChange={handleTipo}
                        />
                    </div>
                    <div className='valor'>
                        <h2>Valor</h2>
                        <input
                        type= 'text'
                        name= 'text'
                        placeholder='Digite o valor da conta'
                        value={valor}
                        onChange={handleValor}
                        />
                    </div>
                </div>
                <button type='submit'>
                    Adiconar conta
                </button>
            </form>
        </section>
    )
}