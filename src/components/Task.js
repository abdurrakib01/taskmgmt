import '../styles/tasks.css';
import { Modal } from 'antd';
import UpdateTask from './UpdateTask';
import { useState } from 'react';
export default function Task(){
    const [visible, setVisible] = useState(false)
    return(
        <>
        <div onClick={()=>{setVisible(true)}} className="task">
            <div className='flex justify-between'>
                <p className='font-bold'>Handle Selected Values</p>
                <p className='text-red-500 text-sm font-bold'>Due Date: 09/15/22</p>
            </div>
            <div>
                <p className='text-sm line'>
                You can use the onChange callback to handle the selected values when the user makes 
                selections. In the handleChange function, you can access the selected values as an array.
                Customize the handleChange function to suit your application's needs for handling the 
                selected values.
                </p>
                <p className='text-sm text-blue-800 mt-1 font-semibold'>Status: Pending</p>
                <div className='flex justify-between mt-1'>
                    <p className='text-sm text-violet-600 font-medium'>Assign Members: AbdurRakib, TaskinHossain</p>
                    <p className='text-sm font-bold text-blue-800'>Priority: 7</p>
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