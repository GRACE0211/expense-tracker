import React, { useRef } from 'react'


function IncomeForm({ income, setIncome}) {

    const desc = useRef(null);
    const price = useRef(null);
    const date = useRef(null);

    // console.log();
    // console.log(desc.target.value);

    const AddIncome = e => {
        e.preventDefault();
        console.log(desc.current.value, price.current.value, date.current.value);
        // 解決輸入值為空問題 
        if(desc.current.value && price.current.value && date.current.value !== ''){
        let d = date.current.value.split('-'); // 2023-03-23
        let newD = new Date(d[0], d[1], d[2]);

        setIncome([...income, {
            'desc': desc.current.value,
            'price': price.current.value,
            'date': newD.getTime()
        }]);
        // console.log(desc);
        // 清空儲存格
        desc.current.value = '';
        price.current.value = null;
        date.current.value = null;
    }else if(desc.current.value === ''){
        alert('please enter description!');
        return;
    }
    else if(price.current.value === ''){
        alert('please enter price!');
        return;
    }else if(date.current.value === ''){
        alert('please enter date!');
        return;
    }
    }
    return (
    <form onSubmit={AddIncome} className=" mb-6">
        <div className="flex-wrap bg-blue-200 shadow-md shadow-gray-600/30 rounded-sm p-1">
            <input ref={desc} type='text' name='desc' id='desc' placeholder=' Income Description' className="ml-2 my-2 shadow-md shadow-gray-600/30 rounded-sm font-mono"></input>
            <input ref={price} type='number' name='price' id='price' placeholder=' Price' className="w-20 my-2 ml-2 shadow-md shadow-gray-600/30 rounded-sm font-mono"></input>
            <input ref={date} type='date' name='date' id='date' placeholder=' Income Date' className="w-40 my-2 ml-2 shadow-md shadow-gray-600/30 rounded-sm font-mono"></input>
            <input type='submit' value='Add Income' className="ml-5 bg-amber-500 hover:bg-amber-700 hover:text-white transition ease-in-out px-2 rounded-md font-bold flex-initial shadow-md shadow-gray-600/70 my-2 mr-2"></input>
        </div>
    </form>
    )
}




export default IncomeForm;   

