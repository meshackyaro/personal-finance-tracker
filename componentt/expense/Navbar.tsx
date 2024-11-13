import Link from "next/link";
import styles from '@/styles/reuseable.module.css'
export default function Navbar(props:{index:number}){
    return (
        <div className={'flex justify-between items-center px-[20px] md:px-[30px] shadow-lg'}>
            <p>Tracker</p>
            <div className={'flex gap-[20px]'}>
                <Link href={'/expense'} className={${props.index === 0? styles.text :styles.current}}>Expense</Link>
                <Link href={'/income'} className={'text-black font-semibold text-sm md:text-lg'}>Income</Link>
            </div>
        </div>
    )
}