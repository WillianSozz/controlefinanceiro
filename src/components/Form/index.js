import React, { useState } from 'react'
import './style.css'
import Grid from '../Grid';

const Form = ({ handleAdd, transactionsList , setTransactionsList }) => {
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
            alert('Informe a descrição e o valor!')
            return;
        } else if (amount < 1) {
            alert('O valor tem que ser positivo!')
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        handleAdd(transaction)

        setDesc('')
        setAmount('')
    };


    return (
        <div>
            <div className='containerf'>
                <div className='inputContainerf'>
                    <label>Descrição:</label>
                    <input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div className='inputContainerf'>
                    <label>Valor:</label>
                    <input value={amount} type="number" onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className='radioGroup'>
                    <input type='radio' id='rIncome' defaultChecked name='group1' onChange={() => setExpense(!isExpense)} />
                    <label htmlFor='rIncome'>Entrada</label>
                    <input type='radio' id='rExpenses' name='group1' onChange={() => setExpense(!isExpense)} />
                    <label htmlFor='rExpenses'>Saída</label>

                </div>
                <button onClick={handleSave}>ADICIONAR</button>
            </div>
            <Grid itens={transactionsList} setItens={setTransactionsList}/>
        </div>
    )

}

export default Form;