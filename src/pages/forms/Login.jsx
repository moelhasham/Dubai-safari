import { useState } from "react"
import "./forms.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Login() {


  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  // Form submint handler 
    const formsubmithandler = (event) => {
      event.preventDefault()

      if(email.trim() === "")
      return toast.error("Email is required")
    
    if(password.trim() === "")
    return toast.error("password is required")
  }


  return (
    <div className="form-wrapper">
      <ToastContainer />
      <form onSubmit={formsubmithandler} className="form">
        <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="Email"/>
        <input value={password}  onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
        <button className="form-btn">Login</button>
      </form>
    </div>
  )
}

export default Login