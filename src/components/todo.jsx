import { useState } from "react"
import AddTodo from "./addtodo"
import TodoList from "./todolist"

const Todo = () => {
    const [activityArr,setactivityArr] = useState([])


    return (
        <div>
            <div className="flex gap-5 flex-wrap">

                <AddTodo activityArr={activityArr} setactivityArr={setactivityArr}/>

                <TodoList activityArr={activityArr} setactivityArr={setactivityArr}/>
            </div>
        </div>


    )
}
export default Todo