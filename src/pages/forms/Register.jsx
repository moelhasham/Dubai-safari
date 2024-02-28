import { useState } from "react"
import "./forms.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [username , setUsername] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [confirmpassword , setConfirmpassword] = useState("")

  // Form submint handler 
    const formsubmithandler = (event) => {
      event.preventDefault()
        
      if(username.trim() === "")
      return toast.error("uasername is required")

      if(email.trim() === "")
      return toast.error("Email is required")
    
    if(password.trim() === "")
    return toast.error("password is required")

    if(password.trim() != confirmpassword)
    return toast.error("password not confirm")
 
  }


  return (
    <div className="form-wrapper">
      <ToastContainer />
      <form onSubmit={formsubmithandler}
       className="form"
       >
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email" placeholder="Email"
      />
      <input
        value={confirmpassword}
        onChange={(e) => setConfirmpassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
     />
      
      <button
       className="form-btn">
        Login
      </button>
    
      </form>
    </div>
  )
}

export default Register