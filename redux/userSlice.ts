import {createSlice, PayloadAction,} from "@reduxjs/toolkit";
import {Expense, Income, User} from "@/interfaces/interfaces";

const incomes : Income[]=[]
const expenses : Expense[]=[]

const initialState:User = {
    expense: expenses,
    incomes: incomes,
    username:''
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
        },
        setUsername(state, action:PayloadAction<string>){
            state.username = action.payload
        }
    }

})
export const {addIncome,addExpenses,setUsername} = UserSlice.actions;
export default UserSlice.reducer;