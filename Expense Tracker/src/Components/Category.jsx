import React from 'react';
import { useSelector } from 'react-redux';

function CategoryTotals() {
  const expenses = useSelector((state) => state.transaction.Expenses);

  const calculateTotals = (expenses) => {
    return expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = 0;
      }
      acc[expense.category] += parseFloat(expense.amount) || 0;
      return acc;
    }, {});
  };

  const categoryTotals = calculateTotals(expenses);
  const totalExpenses = Object.values(categoryTotals).reduce((acc, total) => acc + total, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Category Totals</h1>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <ul>
          {Object.entries(categoryTotals).map(([category, total]) => (
            <li
              key={category}
              className="flex justify-between items-center mb-2 p-2 bg-white rounded-md shadow-sm"
            >
              <span className="text-lg font-medium text-gray-800">{category}</span>
              <span className="text-lg font-medium text-red-600">Rs {total.toFixed(2)}</span>
            
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-gray-300 pt-2">
          <div className="flex justify-between items-center font-bold text-lg">
            <span>Total Expenses</span>
            <span className='text-red-700'>Rs {totalExpenses.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryTotals;
