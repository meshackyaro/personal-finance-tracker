import styles from '@/styles/styles.module.css'
export default function Modal(props:{isOpen:boolean,setOpen: (open: boolean) => void}){
    const handleCancel = () => {
        props.setOpen(false);
      };
      const handleCreate = () => {
        console.log("Transaction created!");
        props.setOpen(false);
      };
    
    return (
        <dialog className={`${props.isOpen? 'flex flex-col': 'hidden'} fixed ${styles.modal}`}>
            <p>Register a transaction</p>
            <div>
                <input type="text" placeholder="Title"/>
                <input type="number" />
                <input type="text" placeholder="Enter description" />
            </div>
            <div className='flex gap-[15px] justify-center items-center'>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleCreate}>Create</button>
            </div>
        </dialog>
    )
}