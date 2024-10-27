import { useState } from "react"
import Item from "./item"

const TodoList = (props) => {

    const activityArr = props.activityArr

    const setactivityArr = props.setactivityArr



    return (
        <div className="bg-violet-300 p-2 border rounded-md flex-grow">
            <h1 className="text-1xl font-medium" >Today's Activity</h1>
            {activityArr.length === 0 ? <p>You haven't added anything yet</p> : ""}
            {
                activityArr.map(function (item, index) {
                    return <Item item={item} idx={index} id={item.id} activityArr={activityArr} setactivityArr={setactivityArr} />
                })
            }

        </div>
    )
}

export default TodoList