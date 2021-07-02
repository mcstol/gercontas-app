import React, { useState } from 'react'
import './style.css'


export const Add = ({onSuccess}) => {

    const [type, setType ] = useState('')
    const [value, setValue ] = useState('')

    const handleTipo = (event) => {
        setType( event.target.value)
    }

    const handleValor =(event) =>{
        setValue(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(type && value){
            onSuccess({type, value})
            setType('')
            setValue('')
        }
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
                        value={type}
                        onChange={handleTipo}
                        />
                    </div>
                    <div className='valor'>
                        <h2>Valor</h2>
                        <input
                        type= 'text'
                        name= 'text'
                        placeholder='Digite o valor da conta'
                        value={value}
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