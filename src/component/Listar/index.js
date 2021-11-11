import React from "react";
import './style.css'

export const Bills = ({id, type, value, onRemove, onUpdate }) => {
  const onClick = () => onRemove(id)
  const onAtualizar = () => onUpdate({id, type, value})



  return(
    <tr>
     <td>{id}</td> <td>{type}</td><td>{value}</td>
     <td><button onClick={onAtualizar}>Atualizar</button></td>
     <td><button onClick={onClick}>Remover</button></td>

    </tr>
  )

}

export  const Listar = ({ bills, onRemove, onUpdate }) =>{
      console.log(bills)
      return (
        <section>
          <h2>Contas</h2>
          <table>
            <tbody>
              {bills.map((item) =>(
                <Bills key={item.id} {...item} onRemove={onRemove} onUpdate={onUpdate}/>
              ))}
            </tbody>
          </table>
          <ul>
          </ul>
        </section>
      );
}

