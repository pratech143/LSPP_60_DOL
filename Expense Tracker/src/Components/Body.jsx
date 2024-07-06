import React from 'react'
import AddExpenses from './AddExpenses'
import ExpenseList from './ExpenseList'

function Body() {
  return (
    <>
     <AddExpenses categories ={['food','rent','clothes','education']}/>
    <ExpenseList/>
    </>
  )
}

export default Body