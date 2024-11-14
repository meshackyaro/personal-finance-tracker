import {Transaction } from "@/interfaces/interfaces"
import {Bar} from 'react-chartjs-2'
import {useSelector} from 'react-redux'
import { RootState } from "@/redux/store"

interface MapData {
    text:string,
    data: Transaction[]
}
export default function Chart(){
    const allIncomes = useSelector((state:RootState)=> state.user.incomes)
    const allExpenses= useSelector((state:RootState)=> state.user.expense)
    const data: MapData[] = [{text:"day",data:[]},{text:"weekly",data:[]},{text:"Monthly",data:[]},{text:"yearly",data:[]}]
    const texts: string[] = [];
    data.forEach((element) => {texts.push(element.text);});
    const dataSet: Transaction[]= []
    data.forEach((element)=>{dataSet.push(...element.data)})
    const addMore= ()=>{
        return (
            <div>
                
            </div>
        )
    }
    return (
        <div className={"flex border-[1px] border-gray-300 m-[10px]"}>
            <div className='flex justify-between items-center py-[10px] px-[7px] gap-[20px]'>
                {data.map((obj,index)=>(<p key={index} className='p-[7px_15px] rounded-[5px] text-black capitalize  bg-gray-300'>{obj.text}</p>))}
            </div>
            <div className={`${allExpenses.length===0?'h-[120px] flex justify-center items-center':''}`}>
                {allExpenses.length !== 0 ? 
                <Bar data={{labels:texts,datasets:[{label:"Expenses",data:[]}]}}/>:
                <p className={'text-balance text-gray-200 font-semibold'}>No Record created Yet</p>
                }
            </div>
            <button className={'h-[20px] w-[150px] flex text-center'} onClick={addMore}>Add More+<button/>
        </div>
    )
}