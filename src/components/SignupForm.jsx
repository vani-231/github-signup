import * as React from 'react';
import './Signup.css'
const SignupForm = () =>{

  const [user,SetUser]=React.useState({
    username:"",
    email:"",
    password:"",
  })

  const [records,setRecords] = React.useState([])
  
  const handleInput = (e)=>{
    const name = e.target.name
    const value = e.target.value
    console.log(name,value)
     //console.log(name)
     SetUser({...user,[name]:value});

  }

 

  const handleSubmit = (e)=>{
         e.preventDefault()
         const newRecord = { ... user, id : new Date().getTime().toString() }
         console.log(records)
         setRecords([ ... records, newRecord]);
         console.log(records)
         SetUser({ username:"",
         email:"",
         password:"",})
  }
  return(<>
  
    
      <h2>Create Account</h2>
      <form action=''onSubmit={handleSubmit} >
        <div className='form'>
          <label htmlFor='username' >Username</label>
          <input  autoComplete='off'  value={user.username} onChange={handleInput} type="text" name='username' id='username' />
          <label htmlFor='email'>Email</label>
          <input  autoComplete='off'  value={user.email} onChange={handleInput} type="email" name='email' id='email' />
          <label htmlFor='password'>Password</label>
          <input  autoComplete='off'  value={user.password} onChange={handleInput} type="password" name='password' id='password' />
          <button type='submit' > Signup For Github</button>
          
        </div>
         
      </form>
      <div>
        {
          records.map((person)=>{
            const {username,email,password} = person
            return(
              <div className='data' key={person.id}>
                   <p>{username}</p>
                   <p>{email}</p>
                   <p>{password}</p>

                </div>
            )
          })
        }
      </div>

 
  </>)
}

export default SignupForm;
