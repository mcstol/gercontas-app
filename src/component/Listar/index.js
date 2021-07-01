import React from "react";
import './style.css'


export  const Listar = ({ bills }) =>{
      console.log(bills)
      return (
        <section>
          <h2>Contas</h2>
          <table>
            {bills.map((item,index) =>(
              <tr key={index}><td>{item.tipo}</td><td>{item.valor}</td></tr>
            ))}
          </table>
          <ul>
          </ul>
        </section>
      );
}

