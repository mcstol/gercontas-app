import React, { useState, useEffect } from 'react'


 export const FormAtualizar = ({data}) => {
     const[ident, setIdent] = useState(data.id)
     const[type, setType] = useState(data.type)
     const[value, setValue] = useState(data.value)

    //  const dado = Object.values(data)
     console.log({data})
     console.log({
         ident, type,value
     })
     useEffect(() => {
        if (data.id){
            setIdent(data.id)
            setType(data.type)
            setValue(data.value)
        }
     }, [JSON.stringify(data)])

    const handleId = (event) =>{
        setIdent(event.target.value)
    }

    const handleTipo = (event) =>{
        setType(event.target.value)
    }

    const handleValor = (event) =>{
        setValue(event.target.value)
    }


    const handleSubmit = (event) =>{
        console.log({ident})
        // event.preventDefault()

        fetch(`http://localhost:3010/contas/${ident}`, {
            method: 'PUT',
            body: JSON.stringify({type,value}),
            headers:{
                  'Content-type': 'application/json; charset=UTF-8',
            },
      })
      .then((response) => response.json())
      .then((json) => {
        console.log({json})
      })
    }




    return(
        <section>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className= 'formulario'>
                        <input
                        type= 'number'
                        name= 'number'
                        placeholder= 'id'
                        value={ident}
                        onChange={handleId}
                        />
                        <input
                        type= 'text'
                        name= 'text'
                        placeholder= 'atualização de tipo'
                        value={type}
                        onChange={handleTipo}

                        />
                        <input
                        type= 'text'
                        name= 'text'
                        placeholder= 'atualização de valor'
                        value={value}
                        onChange={handleValor}
                        />
                    </div>
                    <button type='submit'>Confirmar</button>
                </div>
            </form>
        </section>


    )
}