import '../styles/tasks.css';
import { Modal } from 'antd';
import UpdateTask from './UpdateTask';
import { useEffect, useState } from 'react';
export default function Task(props){
    const [visible, setVisible] = useState(false)
    return(
        <>
        <div onClick={()=>{setVisible(true)}} className="task">
            <div className='flex justify-between'>
                <p className='font-bold'>{props.task.title}</p>
                <p className='text-red-500 text-sm font-bold'>Due Date: {props.task.due_date}</p>
            </div>
            <div>
                <p className='text-sm line'>{props.task.des}</p>
                <p className='text-sm text-blue-800 mt-1 font-semibold'>Status: {props.task.status}</p>
                <div className='flex justify-between mt-1'>
                    <p className='text-sm text-violet-600 font-medium'>
                        Assign Members: {props.task.assign_username.map((value)=>(value))}</p>
                    <p className='text-sm font-bold text-blue-800'>Priority: {props.task.priority}</p>
                </div>
            </div>
        </div>
        <Modal
            title="UPDATE TASK"
            open={visible}
            onCancel={()=>{setVisible(false)}}
            footer={null}>

            <UpdateTask/>
        </Modal>
        </>
        
    )
}