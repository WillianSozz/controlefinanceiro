import React from 'react'
import './style.css'
import GridItem from '../GridItem';


const Grid = ({ itens, setItens }) => {
    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) =>transaction.id !== ID)
        setItens(newArray)
        localStorage.setItem('transactions', JSON.stringify(newArray))
    }
    return (
        
            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th className='thc'>Tipo</th>
                        <th className='the'></th>
                    </tr>
                </thead>
                <tbody>
                    {itens?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete}/>
                    ))}
                </tbody>
            </table>

    )
}

export default Grid;