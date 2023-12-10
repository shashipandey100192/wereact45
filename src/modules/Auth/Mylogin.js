import React from 'react'
import { Link } from 'react-router-dom'

export default function Mylogin() {
const mylogin = ()=>
{
   const u = document.querySelector('#user').value;
   const p = document.querySelector('#pass').value;
    if(u==='kumar' && p==='123')
    {
        alert("welcome");
        document.location="dashboard";
    }
    else{
        alert("wrong");
    }

   

}


    return (
        <div className='container mt-3'>
            <div className='row justify-content-md-center'>
                <div className='col-md-5 border p-5 shadow bg-light'>
                    <h3 className='text-center'>User Login Page</h3>
                    <hr/>
                    <section className='row'>
                        <div className='col-12'>
                            <div class="mb-3">
                                <label class="form-label">Email address</label>
                                <input type="email" class="form-control" id='user'/>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div class="mb-3">
                                <label class="form-label">Password</label>
                                <input type="password" class="form-control" id='pass'/>
                            </div>
                        </div>
                        
                        <div className='col-12 text-center'>
                            <div class="mb-3">
                               <button className='btn btn-success' onClick={mylogin}>Login</button>
                               <button className='btn btn-danger ms-3'>cancel</button>
                               <Link to="registor">Registor</Link>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    )
}
