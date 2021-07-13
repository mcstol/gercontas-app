import React from "react";
import './style.css'

export const Bills = ({id, type, value, onRemove }) => {
  const onClick = () => onRemove(id)



  return(
    <tr>
     <td>{id}</td> <td>{type}</td><td>{value}</td><td><button onClick={onClick}>Remover</button></td>
    </tr>
  )

}

export  const Listar = ({ bills, onRemove }) =>{
      console.log(bills)
      return (
        <section>
          <h2>Contas</h2>
          <table>
            <tbody>
              {bills.map((item) =>(
                <Bills key={item.id} {...item} onRemove={onRemove}/>
              ))}
            </tbody>
          </table>
          <ul>
          </ul>
        </section>
      );
}

