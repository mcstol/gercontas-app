import React, { useState, useEffect } from 'react';
import './App.css';

import { Add, Listar, FormAtualizar } from './component'

function App() {
      const [state, setState] = useState([])
      const[data, setData] = useState({})


      const onSuccess = (json) => {

            setState((prev) =>[...prev, json])

      }

      const onRemove = (id) => {
            console.log('Removeu', id)
            fetch(`http://localhost:3010/contas/${id}`, {
              method: 'DELETE',
            })
            .then(() => {
                  setState((prev) => prev.filter((item) => item.id !== id))
            })

      }
      const onUpdate = ({id, type, value}) =>{
            setData({
                  id: id,
                  type: type,
                  value: value
            })
      }

      useEffect(() => {
            fetch('http://localhost:3010/contas')
            .then((response) => response.json())
            .then((json) => setState(json))
      }, [])

 return(
    <div className="App">
          <h1>Gerenciamento de Contas</h1>

          <Add onSuccess={onSuccess}/>
          <Listar bills = {state} onRemove={onRemove} onUpdate ={onUpdate}/>
          <FormAtualizar data ={data}/>

    </div>
 )

}

export default App;
