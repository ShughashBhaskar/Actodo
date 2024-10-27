import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const SignUp = (props) => {
    const user = props.user
    const setuser = props.setuser
    const [eusername, seteusername] = useState("")
    const [epassword, setepassword] = useState("")
    const [confirmpass, setconfirmpass] = useState("")
    const [valid, setvalid] = useState(true)
    const [valids, setvalids] = useState(true)
    const navigate = useNavigate()


    const handleusern = (event) => {
        seteusername(event.target.value)
    }
    const handleuserp = (event) => {
        setepassword(event.target.value)
    }
    const handleconfirmpass = (event) => {
        setconfirmpass(event.target.value)
    }
    const addUser = () => {
        if (epassword == confirmpass) {
            setuser([...user, { username: eusername, password: epassword }])
            setvalids(false)
            setvalid(true)
            navigate('/')
        }
       
else {
        setvalid(false)
        setvalids(true)
}}

return (
    <div className="bg-black p-10 border rounded-md">
        <div className="bg-white p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p>I help you manage your activities after your login :)</p>
            <div className="flex flex-col gap-3 my-1">
                <input type="text" className="p-2 w-52 bg-transparent border border-black rounded-md" placeholder="username" value={eusername} onChange={handleusern} />
                <input type="text" className="p-2 w-52 bg-transparent border border-black rounded-md" placeholder="password" value={epassword} onChange={handleuserp} />
                <input type="text" className="p-2 w-52 bg-transparent border border-black rounded-md" placeholder="confirm password" value={confirmpass} onChange={handleconfirmpass} />

                {
                    valid ? " " : <p  className="text-red-500">Password mismatches</p>
                    
                }





            </div>
            <button className="bg-yellow-400 p-2 my-2 text-white border rounded-md" onClick={addUser}>Signup</button>

            {
                    valids ? " " : <p className="text-violet-500">Signup Successfull</p>
                    
                }
            <p>Already have an account? <Link to={'/'} className="underline">Login</Link></p>
        </div>

    </div>
)
}
export default SignUp