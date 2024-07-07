import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction } from '../../store/expenseSlice';

function ExpenseList() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.transaction.Expenses);

  const filteredItems = useMemo(() => (expenses.filter(item =>
    item.title.toLowerCase().includes(input.toLowerCase())
  )), [input, expenses])

  return (
    <>
    <div className='p-6'>
      <h1 className="text-2xl font-bold mb-4">Search Expenses</h1>
    <input className="m-5 focus:outline-none"
    type="text"
    placeholder='Type title to search....'
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  </div>
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Expenses</h1>
      
    
      

      <div className="grid grid-cols-4 gap-4  max-h-44 overflow-y-scroll">
        <div>
          <h2 className="text-xl font-semibold mb-2">Title</h2>
          {
            filteredItems.map((expense) => (
              <div key={expense.id} className="mb-2">
                <p className="px-4 py-2 text-gray-700">{expense.title}</p>
              </div>

            ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Amount</h2>
          {filteredItems.map((expense) => (
            <div key={expense.id} className="mb-2">
              <p className="px-4 py-2 text-gray-700">{expense.amount}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Category</h2>
          {filteredItems.map((expense) => (
            <div key={expense.id} className="mb-2">
              <p className="px-4 py-2 text-gray-700">{expense.category}</p>
            </div>
          ))}
        </div>


        <div>
          <h2 className="text-xl font-semibold mb-2">Actions</h2>
          {filteredItems.map((expense) => (
            <div key={expense.id} className="mb-2">
              <button
                onClick={() => dispatch(deleteTransaction(expense.id))}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default ExpenseList;
