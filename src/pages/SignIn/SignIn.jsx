import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import registerl from '../../assets/lottie/loginlottiee.json'
import AuthContext from '../../context/AuthContext/AuthContext';
const SignIn = () => {
    const { signInUser  } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/'

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                console.log('sign in' ,result.user)
                navigate(from);


            })
            .catch(error => {
                console.log(error.message)
            })
    };
    return (
        <div className='pb-10'>

            <div className='md:flex justify-center flex-row-reverse items-center'>
                <div className='md:block hidden md:w-2/6'>
                    <Lottie animationData={registerl}></Lottie>
                </div>
                <div className=' md:w-2/6 '>
                    <h1 className='  font-bold text-xl md:text-5xl pt-12'>Sign to Get <br />Started!</h1>
                    <div className='  mt-1'>
                        <div className='flex justify-center'>
                            <div className='w-1/5 block  md:hidden'>
                                <Lottie animationData={registerl}></Lottie>
                            </div>

                        </div>

                        <form onSubmit={handleSignIn} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-mono">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Enter your email"
                                    className="font-mono input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-mono text-xl">Password</span>
                                </label>
                                <input
                                    type="text"
                                    name='password'
                                    placeholder="Enter your password"
                                    className="font-mono input input-bordered"
                                    required
                                />


                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[#9660ea] text-white text-xl font-mono">
                                    Sign In
                                </button>
                            </div>
                        </form>

                    </div>
                    <div className='flex justify-center'>
                        <h1 className='font-mono'> New TO Job Portal? <Link to='register' className='underline text-[#9660ea]'>Sign Up Now</Link> </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;