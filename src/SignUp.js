import { useState } from "react";
import { useHistory } from 'react-router-dom';
const SignUp = () => {
    
    const[isPending,setISPending]=useState(false);
    const history = useHistory();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(null);
    const[email,setEmail]=useState('');
    const [error, setError] = useState(null);
   
    

    

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
      };
    
      const checkPasswordMatch = () => {
        if (password === confirmPassword) {
          setPasswordMatch(true);
          setTimeout(() => {
            history.push("/signin"); 
          }, 2000);
         
        } else {
          setPasswordMatch(false);
         
        }
      };


    const handleSubmit = (e) =>{
         e.preventDefault();
         setISPending(true);
            // Check if all the form fields are valid before submitting
  if (!isValidEmail(email) || password.trim() === '' || confirmPassword.trim() === '') {
    // If any field is invalid, display the "Invalid Credentials" message
    setPasswordMatch(false);
  } else {
    // If all fields are valid, proceed with form submission
    setPasswordMatch(true);
    checkPasswordMatch(); // This function already handles the form submission and navigation
  }
};  
         
    

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
  }


    
    return (  
        <div className="signUp">
         
            <h2>Sign up</h2>
            
           
            
            <form onSubmit={handleSubmit}>
                <div>
               <input type="text" placeholder="First name" required/>
               <input type="text" placeholder="Surname" required/> 
               </div>
             <label>
                 <input type="number" id="phoneNumberInput" name="phoneNumberInput" pattern="[0-9()+-]*" placeholder="Phone number" required/>

                 </label>
                 <label>
         <input type="email" id="emailInput" name="emailInput" value={email} onChange={handleChange} placeholder="Email ID" required/>
         </label>
         {error && <h5 style={{color: 'red'}}>{error}</h5>}
             <label>
               <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} required/>
               </label>
               <label>
               <input type="password" placeholder="confirm password" value={confirmPassword} onChange={handleConfirmPasswordChange} required/>
               </label>
          

   <h6>Date of Birth </h6>  
   
    
<input type="number" placeholder="1" id="dateInput" name="dateInput" min="01" max="31" required/>

<select id="monthInput" name="monthInput" required>
  <option value="01">January</option>
  <option value="02">February</option>
  <option value="03">March</option>
  <option value="04">April</option>
  <option value="05">May</option>
  <option value="06">June</option>
  <option value="07">July</option>
  <option value="08">August</option>
  <option value="09">September</option>
  <option value="10">October</option>
  <option value="11">November</option>
  <option value="12">December</option>
</select>

<input type="number" placeholder="2023" id="yearInput" name="yearInput" min="1900" max="2023" required/>
<label>

</label>



<h6>Gender</h6>
<div>
<label for="male">Male</label>
<input type="radio" id="male" name="gender" value="male" required/>
<label for="female">Female</label>
<input type="radio" id="female" name="gender" value="female" required/>
<label for="custom">Custom</label>
<input type="radio" id="custom" name="gender" value="custom" required/>

</div>
          <p>we secure our customer's data by performing these- Data Encryption,Access Control and Authentication,Regular Security Audits and Testing,Regular Software Updates etc.
            we specially take care of our customers privacy.
           <br /> By clicking Sign up ,you agree to our <span>terms</span>,<span>Privacy Policy</span>and <span>cookies Policy</span>.</p>    
              
           {!isPending && <button onClick={handleSubmit}>Sign up</button>}

{isPending && <button>Signing up</button>}

{/* Display the "Invalid Credentials" message when the form is submitted and fields are invalid */}
{passwordMatch === false && (
  <>
<h2 className="warning">Invalid Credentials</h2>
{window.location.reload()}
</>

)}
{/* Redirect to sign-in page when the form is submitted and fields are valid */}
{passwordMatch === true && (
  <>
    <h2 className="warning">Account has been created successfully</h2>
    <h4>Redirecting to sign-in page...</h4>
   </>
)}
            
            </form>
         
            </div> 
       
    );

  }
 
export default SignUp;