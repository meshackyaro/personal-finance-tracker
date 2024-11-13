import {createSlice, PayloadAction,} from "@reduxjs/toolkit";
import {Expense, Income, User} from "@/interfaces/interfaces";

const incomes : Income[]=[]
const expenses : Expense[]=[]

const initialState:User = {
    expense: expenses,
    incomes: incomes
}
const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addIncome(state,action:PayloadAction<Income>){
            state.incomes.push(action.payload)
        },
        addExpenses(state, action:PayloadAction<Expense>){
            state.expense.push(action.payload)
        }
    }

})
export const {setBaseUrl} = UserSlice.actions;
export default UserSlice.reducer;