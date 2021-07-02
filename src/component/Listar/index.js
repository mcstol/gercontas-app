import React from "react";
import './style.css'


export  const Listar = ({ bills }) =>{
      console.log(bills)
      return (
        <section>
          <h2>Contas</h2>
          <table>
            <tbody>
              {bills.map((item,index) =>(
                <tr key={index}><td>{item.type}</td><td>{item.value}</td></tr>
              ))}
            </tbody>
          </table>
          <ul>
          </ul>
        </section>
      );
}

