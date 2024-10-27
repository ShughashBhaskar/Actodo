import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = (props) => {
    const user = props.user
    const setuser = props.setuser
    const navi = useNavigate()

const [eusername,seteusername] = useState("")
const [epassword,setepassword] = useState("")
const [valid,setvalid] = useState(true)


const handleusern = (event)=>{
    seteusername(event.target.value)
}
const handleuserp = (event)=>{
    setepassword(event.target.value)
}
const handlelogin = ()=>{
    var userfound = false
   user.forEach(function(item) 
   { if(eusername == item.username && epassword == item.password ){
        console.log("Login Successfull")
        setvalid(true)
        userfound=true
        navi('/landing',{state:{user:eusername}})
    }
    
    if(userfound == false){
        setvalid(false)
    }})
   
}

    return (
        <div className="bg-black p-10 border rounded-md">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {valid? <p>I help you manage your activities after your login :)</p>:<p className="text-red-600">Please Sign Up before you login</p>}
               
                <div className="flex flex-col gap-3 my-1">
                    <input type="text" className="p-2 w-52 bg-transparent border border-black rounded-md" placeholder="username" value={eusername} onChange={handleusern}/>
                    <input type="text" className="p-2 w-52 bg-transparent border border-black rounded-md" placeholder="password" value={epassword} onChange={handleuserp}/>


                </div>
                <button className="bg-violet-500 p-2 my-2 text-white border rounded-md" onClick={handlelogin}>Login</button>
           
           <p>Don't have an account? <Link to={'/signup'} className="underline">SignUp</Link></p>
            </div>

        </div>
    )
}
export default Login