import React from 'react'

function Header({totalIncome}) {
    return (
    <header className="flex my-4 justify-between items-center">
        <h1 className="text-2xl font-extrabold">Expenses Tracker</h1>
        <div className="bg-blue-900 text-blue-50 text-2xl px-3 rounded-md font-bold shrink-0 shadow-md shadow-gray-600/70 h-fit">$ {totalIncome}</div>
    </header>
    )
}

export default Header;