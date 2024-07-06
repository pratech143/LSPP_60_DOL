import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    Expenses:[]
};

const expenseSlice = createSlice({
    name: 'expense', 
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            const expense={
                id:nanoid(),
                title:action.payload.title,
                amount:action.payload.amount,
                category:action.payload.category
            } 
            state.Expenses.push(expense);
        },
         deleteTransaction: (state, action) => {
      state.Expenses = state.Expenses.filter((data) => data.id !== action.payload);
    }
    }
});

export const { addTransaction, deleteTransaction } = expenseSlice.actions;

export default expenseSlice.reducer;
