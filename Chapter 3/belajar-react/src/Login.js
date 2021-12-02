import { useNavigate } from "react-router-dom";

export default function Login() {
  
const navigate = useNavigate()

  function loginHandler(event){
      event.preventDefault()

      const login = true
      if(login){
        navigate('/dashboard')
      }
  }
  
  
  return <>
      <form onSubmit={loginHandler}>
        <input type='text'/>
        <input type='password'/>
        <button type='submit'>LOGIN</button>
      </form>
  </>;
}
