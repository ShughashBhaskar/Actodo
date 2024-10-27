const Card = (props)=>{

    return(
        <div style={{backgroundColor:props.bgColor}} className=" p-10 border rounded-md text-center flex-grow">
          <h1 className="font-medium text-2xl">{props.head}</h1>
          <p>{props.para}</p>
       </div>
    )
}
export default Card