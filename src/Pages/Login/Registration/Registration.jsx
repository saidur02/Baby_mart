import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/Authpovider';

const Registration = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = (event) =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value
        console.log(email,password,name,photo)


        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error =>console.log(error))
    }

    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                    <h2 className='text-2xl text-center'>Please Register</h2>
                       <form onSubmit={handleRegister}>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="Your Photo Url" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                       </form>
                        <p className='mt-3'>Already Have An Account ?<Link to='/login'> Please Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;