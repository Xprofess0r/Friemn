import { useState } from "react";
import { useHistory } from 'react-router-dom';
const Signin = () => {
  
    const[isPending,setISPending]=useState(false);
    const[email,setEmail]=useState('');
    const history = useHistory();
    const [error, setError] = useState(null);

    const handleSubmit = (e) =>{
         e.preventDefault();
          setISPending('true');
          
        
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }  
  const handleChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setEmail(e.target.value);
  };

    
    return (  
        <div className="signUp" >
            <h2>Sign in</h2>
            <form onSubmit={handleSubmit}>
            <label for="email">
                <input type="email" id="emailInput" name="emailInput"  placeholder="Email ID" value={email} onChange={handleChange} required/>
               </label>
               <label >
               <input type="password" placeholder="password"  required />
               </label>
                
                {!isPending && <button>Log in</button> }
                {isPending && <button disabled >Logging in...</button> }
                {error && <h5 style={{color:'red'}}>{error}</h5>}
        
            </form>
           
        </div>
         
    );
    }
export default Signin;