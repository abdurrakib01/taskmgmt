import "../styles/auth.css"
import { Select } from "antd";
export default function UpdateTask(){
    const { Option } = Select;
    const handleChange = (values) => {
        // Handle the selected values here
        console.log('Selected values:', values);
      };
    return(
        <form className="flex flex-col mx-auto">
            <label for="title">Title:</label>
            <input type="text" className="title" placeholder="title" name="title"/>
            <label for="des">Description:</label>
            <textarea placeholder="Description" name="des"/>
            <label for="pri">Priority:</label>
            <input type="number" className="title num" placeholder="from 1 to 10" name="pri"/>
            <label for="due">Due Date:</label>
            <input type="date" className="title" placeholder="mm/dd/yy" name="due"/>
            <label for="assign-member">Assign Members</label>
            <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Select items"
                onChange={handleChange}
            >
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
                <Option value="option3">Option 3</Option>
            </Select>
            <label className="mt-3">Status:</label>
            <div className="filter radio flex">
                <input type="radio" name="status" value="completed"/>
                <label for="status"> Completed</label>
                <input type="radio" name="status" value="progressing"/>
                <label for="pro"> Progressing</label>
                <input type="radio" name="status" value="pending"/>
                <label for="pen"> Pending</label>
            </div>
            <div className="flex justify-between">
            <button type="submit" className="btn ">Add Task</button>
            <button type="submit" className="btn" id="del">Delete Task</button>
            </div>
        </form>
    )
}