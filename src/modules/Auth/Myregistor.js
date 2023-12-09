import React from 'react';
import { Link } from 'react-router-dom';

function Myregistor() {
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
                        <input type="email" class="form-control" />
                    </div>
                </div>
                <div className='col-12'>
                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" />
                    </div>
                </div>
                <div className='col-12'>
                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" />
                    </div>
                </div>
                <div className='col-12'>
                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" />
                    </div>
                </div>
                <div className='col-12'>
                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" />
                    </div>
                </div>
                <div className='col-12'>
                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" />
                    </div>
                </div>
                <div className='col-12 text-center'>
                    <div class="mb-3">
                       <button className='btn btn-success'>submit</button>
                       <button className='btn btn-danger ms-3'>cancel</button>
                    </div>
                </div>
            </section>
        </div>

    </div>
</div>
  )
}

export default Myregistor