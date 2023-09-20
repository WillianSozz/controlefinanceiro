import React from 'react'
import './style.css'
import ResumeItem from '../ResumeItem';
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";

export const Resume = ({ income, expense, total}) => {
  return (
    <div>
        <div className='containerr'>
        <ResumeItem title='Entradas' Icon={AiOutlineArrowUp} value={income}/>
        <ResumeItem title='Saídas' Icon={AiOutlineArrowDown} value={expense}/>
        <ResumeItem title='Total' Icon={MdAttachMoney} value={total}/>
        </div>
    </div>
  )
}

export default Resume;