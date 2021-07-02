import React, { useState, useEffect } from 'react';
import './App.css';

import { Add, Listar } from './component'

function App() {
      const [state, setState] = useState([])
      const onSuccess = (item) => setState((prev) =>[...prev, item])

      useEffect(() => {
            fetch('http://localhost:3010/contas')
            .then((response) => response.json())
            .then((json) => setState(json))
      }, [])

 return(
    <div className="App">
          <h1>Gerenciamento de Contas</h1>

          <Add onSuccess={onSuccess}/>
          <Listar bills = {state} />

    </div>
 )

}

export default App;
