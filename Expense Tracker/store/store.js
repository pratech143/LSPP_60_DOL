import {configureStore} from '@reduxjs/toolkit'
import expenseSlice from './expenseSlice'

const Store = configureStore({
    reducer: {
    transaction :expenseSlice

}})
export default Store