const Item = (props) => {
    const activityArr = props.activityArr

    const setactivityArr = props.setactivityArr

    const handleDel = (delid) => {
        const temparr = activityArr.filter(function (item) {
            if (item.id === delid) {
                return false
            } else {
                return true
            }
        })

        setactivityArr(temparr)


    }

    return (
        <div className="flex justify-between">
            
            <p>{props.idx + 1}.{props.item.activity}</p>
            <button onClick={() => handleDel(props.id)}>Delete</button>
        </div>
    )
}

export default Item