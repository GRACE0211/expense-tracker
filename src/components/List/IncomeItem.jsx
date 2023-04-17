import React from 'react';
import { Trash } from '@phosphor-icons/react';
import 'animate.css';

function IncomeItem({ income, index, removeIncome }) {
    let date = new Date(income.date);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    console.log(date);

    const removeHandle = i => {
        removeIncome(i);
    }

    return (
    <div className="flex justify-between  bg-amber-400 shadow-md shadow-amber-900/30 rounded-sm p-2 my-2 animate__animated animate__bounceInUp">
        <div className="p-2 bg-gray-100 shrink w-60 md:text-base text-sm ">{income.desc}</div>
        <div className="p-2 bg-gray-100 flex-none md:text-base text-sm ">$ {income.price}</div>
        <div className="p-2 bg-gray-100 flex-none md:text-base text-sm ">{`${year}/${month}/${day}`}</div>
        <button onClick={() => removeHandle(index)} className="p-2 font-bold text-white bg-red-800 hover:bg-red-600 transition ease-in-out  shadow-md shadow-red-900/40 rounded-sm"><Trash size={16}/></button>
    </div>
    )
}


export default IncomeItem;