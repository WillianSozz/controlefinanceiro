import React from 'react';
import './style.css';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash, } from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
    return (
            <tr>
                <td className='tdi'>{item.desc}</td>
                <td className='tdi'>{item.amount}</td>
                <td className='tdi'>
                    {item.expense ? (
                        <FaRegArrowAltCircleDown color='red' />
                    ) : (
                        <FaRegArrowAltCircleUp color='green' />
                    )}
                </td>
                <td className='tdi'>
                    <FaTrash onClick={() => onDelete(item.id)}/>
                </td>
            </tr>
    )
}

export default GridItem;
