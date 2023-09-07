import "../styles/auth.css";
import { Select } from "antd";


export default function EditProfile(){
    const { Option } = Select;
    const handleChange = (values) => {
        // Handle the selected values here
        console.log('Selected values:', values);
      };
    return(
        <form className="flex flex-col mx-auto">
            <label for="name">Team Name:</label>
            <input type="text" className="title" placeholder="team name" name="name"/>
            <label for="member">Team Members</label>
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
            <button type="submit" className="btn bg-blue-500">Submit</button>
        </form>
    )
}