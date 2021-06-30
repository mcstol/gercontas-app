import React from "react";

export  const Listar = () =>{

    const listarContas = () =>{
      console.log('listou contas!!')
    }

      return (
        <div className="App">
          <h1>Gerenciamento de Contas</h1>

          <div>
            <input></input>
            <button onClick={listarContas} >listar</button>
          </div>
        </div>
      );
}

