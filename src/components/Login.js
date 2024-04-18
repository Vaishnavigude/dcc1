import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Login() {
  return (<>
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
     <div className='form_container p-5 rounded bg-white'>
        <form>
            <h3>Sign In</h3>
            <div className='mb-2'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter Email' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='password'>Password</label>
                <input type='password' placeholder='Enter Password' className='form-control'/>
            </div>
            <div className='mb-2'>
                <input type='checkbox' placeholder='Enter Email' className='custom-control custom-checkbox' id="check"/>
                <label htmlFor='check' className='custom-input-label'>Remember Me</label>
            </div>
            <div className='d-grid'>
                <button className='btn btn-primary '><Link to="/Sidenav"  className='ms-2 no-underline text-white'>Sign in</Link></button>

            </div>
            <p className='text-end mt-2'>
                Forget <a href="">Password?</a><Link to="/Signup" className='ms-2 no-underline text-blue'>Sign up</Link>
            </p>
        </form>
     </div>
    </div>
    </>
  )
}

export default Login