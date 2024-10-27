import { useLocation } from "react-router-dom"
import Card from "../components/card";
import Header from "../components/header";
import Todo from "../components/todo";

const Landing = ()=>{
    const data = useLocation()

    return(
        <div className="bg-black  px-10 py-3">
        <div className="bg-[#EFEFEF] p-10 ">
          <Header username={data.state.user} />
          <div className="flex my-5 justify-between gap-7 flex-wrap">
            <Card bgColor={"#8272DA"} head={"23°"} para={"Chennai"} />
            <Card bgColor={"#FD6663"} head={"20 December"} para={"14:02:34"} />
            <Card bgColor={"#FCA201"} head={"Built Using"} para={"React"} />
          </div>
          <Todo/>
          
        </div>
        </div>
    )
}
export default Landing