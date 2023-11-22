import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';
import googleIcon from '../../assets/googleIcon.png'
import githubIcon from '../../assets/githubIcon.png'
import { FaGithub, FaGoogle } from 'react-icons/fa';
const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const { login, googleProvider, githubProvider } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogleProvider = () => {
        googleProvider()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                toast.success('Login successfull')
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleGithubProvider = () => {
        githubProvider()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                toast.success('Login successfull')
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                toast.success('Login successfull')
                navigate(from, { replace: true })
            })
            .catch(error =>
                toast.error(error.message));

    }
    return (
        <div className='bg-cover text-white' style={{ backgroundImage: "url('https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg')" }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 space-y-2">
                                <button className="btn btn-primary" type='submit'>Login</button>

                                <button onClick={handleGoogleProvider} className="btn ">
                                    <img className='w-10' src={googleIcon} alt="" /> Login with Google
                                </button>

                                <button onClick={handleGithubProvider} className="btn bg-stone-700 text-white hover:bg-stone-800" >
                                    <img className='w-10' src={githubIcon} alt="" /> Login with Github
                                </button>

                            </div>
                            <div>do you new this site?
                                <Link to={'/reg'} className='btn btn-link'>create account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;