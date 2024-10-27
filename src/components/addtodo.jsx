import { useState } from "react"

const AddTodo = (props) => {
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const [additem, setadditem] = useState([""])

    const handleChange = (event) => {
        setadditem(event.target.value)
    }
    const handleadd = () => {
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:additem}])
        setadditem("")
    }

    return (

        <div className="flex flex-col gap-3">
            <h1 className="text-1xl font-medium">Manage Activities</h1>
            <div>
                <input onChange={handleChange} value={additem} type="text" placeholder="Next Activity? " className="border border-black bg-transparent p-1 " />
                <button onClick={handleadd} type="Submit" className="bg-black text-white p-1 border border-black">Add</button>

            </div>
        </div>
    )
}
export default AddTodo